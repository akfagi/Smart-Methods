<?php
$direction = $_POST['direction'];
$distance = $_POST['distance'];

// Code to connect to your database. Replace with appropriate credentials
$servername = "localhost";
$username = "rooot";
$password = "root";
$dbname = "action";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}

// Insert the path into the database
$sql = "INSERT INTO robot_path (direction, distance) VALUES ('$direction', $distance)";

if ($conn->query($sql) === TRUE) {
   echo "Path saved successfully";
} else {
   echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>