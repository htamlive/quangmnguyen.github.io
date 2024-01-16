<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate and process the form data as needed

    // Send email (replace "your_email@example.com" with your actual email address)
    $to = "quangapcs@gmail.com";
    $subject = "New Message from $name";
    $headers = "From: $email\r\n";

    // You can customize the email body as needed
    $email_body = "Name: $name\nEmail: $email\n\n$message";

    mail($to, $subject, $email_body, $headers);
    echo "Mail sent!";
}
?>
