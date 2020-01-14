<?php

include "conn.php";
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
header('content-type:text/html;charset=utf-8');
if(isset($_GET['id'])){
    $id=$_GET['id'];
    $result=$conn->query("select * from wanmei where id=$id");
    echo json_encode($result->fetch_assoc());
}else{
    exit('非法操作');
}
