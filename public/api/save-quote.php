<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido.']);
    exit;
}

$payload = json_decode(file_get_contents('php://input'), true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Solicitud inválida.']);
    exit;
}

$required = ['eventDate', 'city', 'state', 'pax', 'serviceType', 'modality', 'recipes', 'sides', 'salads', 'baseCost', 'travelCost', 'lodgingCost', 'total'];
foreach ($required as $field) {
    if (!array_key_exists($field, $payload)) {
        http_response_code(422);
        echo json_encode(['success' => false, 'message' => 'La cotización está incompleta.']);
        exit;
    }
}

if (!is_array($payload['recipes']) || !is_array($payload['sides']) || !is_array($payload['salads'])) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'El menú de la cotización es inválido.']);
    exit;
}

$pax = filter_var($payload['pax'], FILTER_VALIDATE_INT, ['options' => ['min_range' => 1]]);
$numericFields = ['baseCost', 'travelCost', 'lodgingCost', 'total'];
foreach ($numericFields as $field) {
    if (!is_numeric($payload[$field]) || (float) $payload[$field] < 0) {
        http_response_code(422);
        echo json_encode(['success' => false, 'message' => 'Los montos de la cotización son inválidos.']);
        exit;
    }
}

if ($pax === false || !in_array($payload['serviceType'], ['full', 'labor_only'], true)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Los datos de la cotización son inválidos.']);
    exit;
}

if (array_key_exists('extras', $payload) && !is_array($payload['extras'])) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Los extras de la cotización son inválidos.']);
    exit;
}

if (array_key_exists('extrasCost', $payload) && (!is_numeric($payload['extrasCost']) || (float) $payload['extrasCost'] < 0)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Los montos de la cotización son inválidos.']);
    exit;
}

$cleanList = static function (array $items): array {
    return array_values(array_slice(array_map(static fn ($item): string => mb_substr(trim((string) $item), 0, 120), $items), 0, 20));
};

$extras = [];
foreach (array_slice(is_array($payload['extras'] ?? null) ? $payload['extras'] : [], 0, 50) as $extra) {
    if (!is_array($extra)) {
        continue;
    }
    $unit = $extra['unit'] ?? '';
    $category = $extra['category'] ?? '';
    $price = $extra['price'] ?? null;
    $quantity = $extra['quantity'] ?? null;
    $total = $extra['total'] ?? null;
    if (!in_array($unit, ['table', 'person'], true)
        || !in_array($category, ['entrada', 'adicional'], true)
        || !is_numeric($price) || (float) $price < 0
        || !is_numeric($quantity) || (int) $quantity < 1
        || !is_numeric($total) || (float) $total < 0) {
        http_response_code(422);
        echo json_encode(['success' => false, 'message' => 'Los extras de la cotización son inválidos.']);
        exit;
    }
    $extras[] = [
        'id' => mb_substr(trim((string) ($extra['id'] ?? '')), 0, 100),
        'name' => mb_substr(trim((string) ($extra['name'] ?? '')), 0, 120),
        'description' => mb_substr(trim((string) ($extra['description'] ?? '')), 0, 200),
        'category' => $category,
        'unit' => $unit,
        'price' => round((float) $price, 2),
        'quantity' => (int) $quantity,
        'total' => round((float) $total, 2),
    ];
}

$quote = [
    'eventDate' => mb_substr(trim((string) $payload['eventDate']), 0, 10),
    'city' => mb_substr(trim((string) $payload['city']), 0, 100),
    'state' => mb_substr(trim((string) $payload['state']), 0, 100),
    'pax' => $pax,
    'serviceType' => $payload['serviceType'],
    'modality' => mb_substr(trim((string) $payload['modality']), 0, 120),
    'recipes' => $cleanList($payload['recipes']),
    'sides' => $cleanList($payload['sides']),
    'salads' => $cleanList($payload['salads']),
    'baseCost' => round((float) $payload['baseCost'], 2),
    'travelCost' => round((float) $payload['travelCost'], 2),
    'isTravelPending' => (bool) ($payload['isTravelPending'] ?? false),
    'lodgingCost' => round((float) $payload['lodgingCost'], 2),
    'extras' => $extras,
    'extrasCost' => round((float) ($payload['extrasCost'] ?? 0), 2),
    'total' => round((float) $payload['total'], 2),
    'isTravelDoubled' => (bool) ($payload['isTravelDoubled'] ?? false),
    'grillMastersCount' => max(0, (int) ($payload['grillMastersCount'] ?? 0)),
    'createdAt' => gmdate('c'),
];

$dataDirectory = __DIR__ . '/quote-data';
if (!is_dir($dataDirectory) && !mkdir($dataDirectory, 0750, true)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'No se pudo guardar la cotización.']);
    exit;
}

$id = bin2hex(random_bytes(16));
$file = $dataDirectory . '/' . $id . '.json';
$json = json_encode($quote, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

if ($json === false || file_put_contents($file, $json, LOCK_EX) === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'No se pudo guardar la cotización.']);
    exit;
}

echo json_encode(['success' => true, 'id' => $id]);
