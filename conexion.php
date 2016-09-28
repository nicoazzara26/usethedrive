<?php
$connect = mysqli_connect("localhost", "root", "", "usethedrive");

$name = mysqli_real_escape_string($connect, $_POST["name"]);
$surname = mysqli_real_escape_string($connect, $_POST["surname"]);
$email =  mysqli_real_escape_string($connect, $_POST["email"]);
$psw = mysqli_real_escape_string($connect, $_POST["psw"]);


$sql = "INSERT INTO usuarios VALUES(NULL, '$name', '$surname', '$email', '$psw')";
mysqli_query($connect, $sql);
?>