<?php

if (isset($_POST['submit'])) {
    
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['enail'];
    $message = $_POST['message'];
    
    $mailTo = "sergi9rom@gmail.com";
    $headers = "From: ".$email;
    $txt = "You have reciveda an e-mail from:".$name.".\n\n".$message;
    
    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}