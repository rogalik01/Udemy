<?php
$_POST = json_decode(file_get_contents("php://input"), true); // строка для работы с JSON
echo var_dump($_POST);