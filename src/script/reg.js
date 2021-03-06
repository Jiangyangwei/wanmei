define(['jquery'], function($) {
    return {
        reg: function() {
            let $user = $('input[name="username"]');
            let $userflag = true;
            $user.on('blur', function() {
                console.log(1);
                $.ajax({
                    type: 'post',
                    url: 'http://localhost/html1912/wanmei/php/reg.php',
                    data: {
                        username: $user.val()
                    }
                }).done(function(result) {
                    console.log(result);
                    if (!result) { //不存在
                        $('span').html('√').css('color', 'green');
                        $userflag = true;
                    } else {
                        $('span').html('改用户名已经存在').css('color', 'red');
                        $userflag = false;
                    }
                });
            });

            $('form').on('submit', function() {
                if ($user.val() == '') {
                    $('span').html('请输入用户名').css('color', 'red');
                    $userflag = false;
                };
                if (!$userflag) {
                    return false;
                }
            });


        }
    }
})