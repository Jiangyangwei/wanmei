define(['jquery'], function($) {
    return {
        xuanran: function() {
            this.itemlist = $('.item-list');
            if (localStorage.getItem('cartsid') && localStorage.getItem('cartnum')) {
                console.log(localStorage.getItem('cartsid').split(','));
                console.log(localStorage.getItem('cartnum').split(','));
                let csid = localStorage.getItem('cartsid').split(','); //sid
                let cnum = localStorage.getItem('cartnum').split(','); //数量
                for (let i = 0; i < csid.length; i++) {
                    // this.render(csid[i], cnum[i]);
                    let sid = csid[i];
                    let num = cnum[i];
                    $.ajax({
                        url: 'http://localhost/html1912/wanmei/php/mysql-conn.php',
                        dataType: 'json'
                    }).done((data) => {
                        $.each(data, (index, value) => {
                            if (sid == value.id) {
                                let $clonebox = $('.goods-item:hidden').clone(true, true);
                                $clonebox.find('.goods-pic img').attr('src', value.pic);
                                $clonebox.find('.goods-d-info a').html(value.title);
                                $clonebox.find('.b-price strong').html(value.price);
                                $clonebox.find('.quantity-form input').val(num);
                                $clonebox.find('.b-sum strong').html((value.price * num).toFixed(2));
                                $clonebox.show();
                                $('.item-list').append($clonebox);
                                let $goodsnum = 0; //商品的件数
                                let $goodsprice = 0; //商品的总价
                                $('.goods-item:visible').each(function(index, element) {
                                    if ($(element).find('input:checkbox').is(':checked')) {
                                        $goodsnum += parseInt($(element).find('.quantity-form input').val());
                                        $goodsprice += parseFloat($(element).find('.b-sum strong').html());
                                    }
                                });
                                $('.amount-sum em').html($goodsnum);
                                $('.totalprice').html($goodsprice);
                            }
                        });
                    });

                }


            }
        }

    }
})