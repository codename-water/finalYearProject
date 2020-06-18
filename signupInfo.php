<?php
	include_once('db.php');
	$name = $_POST['name'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$type = $_POST['type'];
	if (!$conn -> query("INSERT INTO `signupinfo` VALUES ('$name','$email','$password','$type')")) 	{
		echo("Error description: " . $conn -> error);
	}
	else
		echo "Data Inserted";
	$conn -> close();
?>