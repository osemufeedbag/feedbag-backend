<?php
require_once('../connection/db_connection.php')

$method = $_SERVER['REQUEST_METHOD']

if($method === 'POST'){
    $data = json_decode(file_get_contents('php://input'));
    

    $sql = "INSERT into users(name,email,color,agro_sector,phone_number)VALUES(?,?,?,?,?)";

    $stmt = $conn->prepare($sql);

    $stmt->bind_param("ssss", $data->name,$data->email,$data->color,$data->agro_sector,$data->phone_number)

    if ($stmt->execute()) {
        $response = ['status' => 1, 'message' => 'Record successfully created'];
    } else {
        $response = ['status' => 0, 'message' => 'Failed to create record.'];
    }

    $stmt->close();

}
else{
    $response = ['status' => 0, 'message' => 'Unsupported request method'];
}

$conn->close();

echo json_encode($response);
?>