<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    
    // Set email recipient
    $to = "kontakt@transportpokojnika.com";
    
    // Build email content
    $email_content = "Ime: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Telefon: $phone\n\n";
    $email_content .= "Poruka:\n$message\n";
    
    // Build email headers
    $email_headers = "From: $name <$email>";
    
    // Send email
    if (mail($to, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Poruka je uspešno poslata."]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Došlo je do greške."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["message" => "Pristup zabranjen."]);
}
?> 