<?php

// Cargar las variables de entorno desde el archivo .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

/* RECAPTCHA
$recaptcha = $_POST['g-recaptcha-response'];

if($recaptcha != ''){

*/
$secret = "6Lf3d4IUAAAAAN0vaHSngD4z9M5DFGQPiZQmOM99";
$ip = $_SERVER['REMOTE_ADDR'];
$var = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$recaptcha&remoteip=$ip");
$array = json_decode($var, true);
/* RECAPTCHA
if($array['success'] && isset($_POST['email'])){
*/
if (isset($_POST['email'])) {
    $email_to = $_ENV['GMAIL_USER']; // Cambia esto por tu dirección de correo electrónico de Gmail
    $email_subject = "Contacto desde Web";

    function died($error)
    {
        // mensajes de error
        echo "Lo sentimos, hubo un error en sus datos y el formulario no puede ser enviado en este momento. ";
        echo "Detalle de los errores.<br /><br />";
        echo $error . "<br /><br />";
        echo "Por favor, corrija estos errores e inténtelo de nuevo.<br /><br />";
        die();
    }

    // Se valida que los campos del formulario estén llenos
    if (
        !isset($_POST['first_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['message'])
    ) {
        die('Lo sentimos pero parece haber un problema con los datos enviados.');
    }

    //En esta parte el valor "name"  sirve para crear las variables que recolectaran la información de cada campo

    $first_name = $_POST['first_name']; // requerido
    $email_from = $_POST['email']; // requerido
    $telephone = $_POST['telephone']; // no requerido 
    $message = $_POST['message']; // requerido
    $error_message = ""; //Linea numero 52;

    //En esta parte se verifica que la dirección de correo sea válida 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email_from)) {
        $error_message .= 'La dirección de correo proporcionada no es válida.<br />';
    }

    //En esta parte se validan las cadenas de texto

    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $first_name)) {
        $error_message .= 'El formato del nombre no es válido<br />';
    }
    if (strlen($message) < 2) {
        $error_message .= 'El formato del texto no es válido.<br />';
    }
    if (strlen($error_message) > 0) {
        died($error_message);
    }

    //Este es el cuerpo del mensaje tal y como llegará al correo

    $email_message = "Contenido del Mensaje.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }
    $email_subject = "Mensaje del Cliente: " . $first_name;
    $email_message .= "Nombre: " . clean_string($first_name) . "\n";
    $email_message .= "Email: " . clean_string($email_from) . "\n";
    $email_message .= "Teléfono: " . clean_string($telephone) . "\n";
    $email_message .= "Mensaje: " . clean_string($message) . "\n";

    // Configuración de PHPMailer para enviar correo a través de Gmail
    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = $_ENV['SMTP_HOST'];
        $mail->SMTPAuth = true;
        $mail->Username = $_ENV['GMAIL_USER']; // Cambia esto por tu dirección de correo electrónico de Gmail
        $mail->Password = $_ENV['GMAIL_PASS']; // Cambia esto por tu contraseña de correo electrónico de Gmail
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = $_ENV['SMTP_PORT']; //puerto de GMAIL

        // Configuración del correo electrónico
        $mail->setFrom($email_from, $first_name);
        $mail->addAddress($email_to);
        $mail->Subject = $email_subject;
        $mail->Body = $email_message;

        // Enviar correo electrónico
        $mail->send();

        echo "Gracias! Nos pondremos en contacto contigo a la brevedad";

    } catch (Exception $e) {
        echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
    }
} else {
    echo "No soy humano";
}
/* RECAPTCHA
}

else{
    echo "Rellene todos los campos";
}
*/

?>
