<?php

if (isset($_POST['submit'])) {
    $name = $POST['name'];
    $subject = $POST['subject'];
    $mailFrom = $POST['email'];
    $message = $POST['message'];

   $mailTo = "kenfcheng@outlook.com";
   $headers = "From: ".$mailFrom;
   $txt = "IMPORTANT!! You received an IMPORTANT email from".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers); 
    header("Location: index.php?mailsend");


}