<?php
header('content-type:text/html;charset=utf-8');
define('HOST','localhost');
define('USERNAME','root');
define('PASSWORD','');
define('DBNAME','wanmei');






$conn=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME );

if($conn->connect_error){
    die('数据库连接错误,错误信息：'.$conn->connect_error);
}














?>