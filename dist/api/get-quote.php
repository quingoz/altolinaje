<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido.']);
    exit;
}

$id = (string) ($_GET['id'] ?? '');
if (!preg_match('/^[a-f0-9]{32}$/', $id)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Identificador inválido.']);
    exit;
}

$file = __DIR__ . '/quote-data/' . $id . '.json';
if (!is_file($file)) {
    http_response_code(404);
    echo json_encode(['success' => false, 'message' => 'Cotización no encontrada.']);
    exit;
}

$content = file_get_contents($file);
if ($content === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'No se pudo consultar la cotización.']);
    exit;
}

echo json_encode(['success' => true, 'quote' => json_decode($content, true)], JSON_UNESCAPED_UNICODE);
