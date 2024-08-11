<?php
$method = $_SERVER['REQUEST_METHOD'];

if($method == 'POST'){
    $data = json_decode(file_get_contents('php://input'));

    $recipient = "info@feedbagagrihub.com";

    $mailheader = "From:".$name."<".$email.">\r\n";

    if(mail($recipient,"",$data->message,$mailheader)){
        $response = ['status'=>true, 'message'=>'mail sent successfully'];
    }
    else{
        $response = ['status'=>false, 'message'=>'Unable to send mail'];
    }
}
else{
    $response = ['status' => 0, 'message' => 'Unsupported request method'];
}

echo json_encode($response);
?>