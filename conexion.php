<?php

$connect = mysqli_connect("mysql.hostinger.com.ar", "u544312543_utdn ", "NAzzara12", "u544312543_utd");

$nombre = ($connect, $_POST["nombre"]
$apellido = ($connect, $_POST["apellido"]
$usuario =  ($connect, $_POST["usr"]
$contraseña = ($connect, $_POST["psw"]


$sql = "INSERT INTO usuarios VALUES(NULL, '$nombre', '$apellido', '$usuario', '$contraseña')";
mysqli_query($connect, $sql);



?>