define(['jquery'], function($) {
    return {
        xuanran: function() {
            this.goodlist = $('.goodlist');
            $.ajax({
                url: 'http://localhost/html1912/wanmei/php/mysql-conn.php',
                dataType: 'json'
            }).done((data) => {
                let $strhtml = '<ul>';
                $.each(data, function(index, value) {
                    $strhtml += `
    <li>
    <p class="sale">
        <span>${value.sale}</span> 折
    </p>
    <a href="" class="like"><span></span>${value.love}</a>
    <a href="" class="tc-pic"><img src="${value.pic}" alt=""></a>
    <p class="title">${value.title}</p>
    <p class="price">¥${value.price}
    <s>¥${value.oldprice}</s></p>
</li>
    `;
                });
                $strhtml += '</ul>';
                this.goodlist.html($strhtml);
            })

        },
        banner: function() {

        }
    }
})