<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $email = $_POST["email"];
    $fecha = $_POST["fecha"];
    $comentario = $_POST["comentario"];

    // Aquí puedes realizar cualquier acción con los datos, como enviar un correo electrónico, almacenar en una base de datos, etc.

    // Por ejemplo, enviar un correo electrónico de confirmación
    $to = "176522@upslp.edu.mx", "179827@upslp.edu.mx";
    $subject = "Nuevo mensaje del formulario de contacto";
    $message = "Nombre: $nombre\n";
    $message .= "Teléfono: $telefono\n";
    $message .= "Correo electrónico: $email\n";
    $message .= "Fecha: $fecha\n";
    $message .= "Comentario: $comentario\n";
    $headers = "From: $email";

    // Enviar el correo electrónico
    mail($to, $subject, $message, $headers);

    // Redireccionar a una página de confirmación
    header("Location: confirmacion.html");
    exit;
}
?>
