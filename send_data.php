<?php

$db_host = 'test';
$db_username = 'root';
$db_password = '';
$db_name = 'user_data';
$db_table = 'users';
$dbcharset = 'utf8';


$is_connected = mysqli_connect($db_host, $db_username, $db_password, $db_name)
    or die('Не удалось подключиться к БД.');

$data = json_decode($_POST['data'], true);
var_dump($data);
foreach($data as $value){
    $sql = "INSERT INTO `users` (`name`, `age`, `city`) VALUES ('" . $value['name'] . "', '" . $value['age'] . "', '" . $value['city'] . "')"; //запрос 
    $result = mysqli_query($is_connected, $sql, MYSQLI_USE_RESULT); //отправка
}    

mysqli_close($is_connected);
?>

