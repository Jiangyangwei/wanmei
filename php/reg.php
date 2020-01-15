<?php

include "conn.php";
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');

if(isset($_POST['username'])){
    $user=$_POST['username'];
    $result=$conn->query("select * from reg where username='$user'");//如果存在结果，注册的用户名存在。
    if($result->fetch_assoc()){//存在
        echo true;//显示1
    }else{
        echo false;//空隙
    }
}

if(isset($_POST['submit'])){
    $username=$_POST['username'];
    $password=($_POST['password']);//后端加密
    $email=$_POST['email'];

    $conn->query("insert reg values(null,'$username','$password','$email') ");
    header('http://localhost/html1912/wanmei/src/login.html');//php页面的跳转。
}