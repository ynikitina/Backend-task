<?php

$db_host = 'test';
$db_username = 'root';
$db_password = '';
$db_name = 'user_data';
$db_table = 'users';
$dbcharset = 'utf8';


$is_connected = mysqli_connect($db_host, $db_username, $db_password, $db_name)
    or die('Не удалось подключиться к БД.');

$sql = "SELECT * FROM `users`"; //запрос 
$res = mysqli_query($is_connected, $sql, MYSQLI_USE_RESULT); //прием 
$result = mysqli_fetch_all($res);
echo json_encode($result);
mysqli_close($is_connected);
?>

