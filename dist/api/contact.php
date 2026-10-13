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

$name = trim((string) ($payload['name'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$phone = trim((string) ($payload['phone'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));
$website = trim((string) ($payload['website'] ?? ''));

if ($website !== '') {
    echo json_encode(['success' => true]);
    exit;
}

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Completa correctamente los campos requeridos.']);
    exit;
}

if (mb_strlen($name) > 100 || mb_strlen($email) > 150 || mb_strlen($phone) > 30 || mb_strlen($message) > 3000) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Uno de los campos excede el límite permitido.']);
    exit;
}

$safeName = str_replace(["\r", "\n"], ' ', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);
$safePhone = str_replace(["\r", "\n"], ' ', $phone);
$recipient = 'altolinajeve@gmail.com';
$subject = 'Nuevo mensaje de contacto - Alto Linaje';
$body = "Nombre: {$safeName}\nCorreo: {$safeEmail}\nTeléfono: " . ($safePhone !== '' ? $safePhone : 'No indicado') . "\n\nMensaje:\n{$message}\n";
$headers = [
    'From: Sitio web Alto Linaje <no-reply@altolinajeve.com>',
    "Reply-To: {$safeName} <{$safeEmail}>",
    'Content-Type: text/plain; charset=UTF-8',
    'MIME-Version: 1.0',
];

if (!mail($recipient, $subject, $body, implode("\r\n", $headers))) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'No se pudo enviar el mensaje. Intenta nuevamente.']);
    exit;
}

echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente.']);
