<?php

    $name =  $_POST['name'];
    $email =  $_POST['email'];
    $model =  $_POST['model'];
    $upgrade =  $_POST['upgrade'];
    $form =  $_POST['formId'];

    $to      = 'vadikshpet01@gmail.com';
    $subject = 'Request from form ' . $form;
    $message = 'Name: ' . $name . "\n" .
               'Email: ' . $email . "\n" .    
               'Model: ' . $model . "\n" .    
               'Want to upgrade: ' . $upgrade; 

    $headers = 'From: ' . $email       . "\r\n" .
                 'Reply-To: vadikshpet01@gmail.com' . "\r\n" .
                 'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>