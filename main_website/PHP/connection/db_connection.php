<?php
$servername = "localhost";
$username = "feedlwzh_admin";
$password = "Tegiz90203#";
$dbname = "feedlwzh_feedbagagrihub";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";



?>