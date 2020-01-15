define(['jquery'], function($) {
    return {
        xuanran: function() {
            this.hd_img = $('.hd img');
            this.bd_ul = $('.bd ul');
            this.h1 = $('.title h1');
            this.pri = $('.pri span');
            this.oldpri = $('.pri s');
            this.bpic = $('.bpic');
            this.count = $('.sl');


            let id = location.search.substring(1).split('=')[1];
            $.ajax({
                url: 'http://localhost/html1912/wanmei/php/getid.php',
                data: {
                    id: id
                },
                dataType: 'json'

            }).done((data) => {
                console.log(data);
                let pic = (data.url).split(',')[0];
                this.hd_img.attr('src', pic);
                this.bpic.attr('src', pic);
                this.h1.html(data.title);
                this.pri.html(data.price);
                this.oldpri.html(data.oldprice);
                let piclist = data.url.split(',');
                let $strhtml = '';
                $.each(piclist, function(index, value) {

                    $strhtml += `<li><a><img src="${value}"/></a></li>`;
                });
                this.bd_ul.html($strhtml);


            });


        },
        tab: function() {


            $('.bd ul ').on('click', 'li a img', function() {

                $('.hd img').get(0).src = $(this).get(0).src;
                $('.bpic').get(0).src = $('.hd img').get(0).src;
            })
        },
        fdj: function() {
            this.wrap = $('.detail-wrap');
            this.spic = $('.hd');
            this.sf = $('.sf');
            this.bf = $('.bf');
            this.bpic = $('.bpic');
            this.bd = $('.bd ul');
            //1.鼠标移入移出显示隐藏小放和大放。
            let _this = this;
            this.spic.hover(() => {
                $('.sf').css('visibility', 'visible');
                $('.bf').css('visibility', 'visible');

                //3.求小放的尺寸和比例
                this.sf.css({
                    width: this.spic.outerWidth() * this.bf.outerWidth() / this.bpic.outerWidth(),
                    height: this.spic.outerHeight() * this.bf.outerHeight() / this.bpic.outerHeight()
                });
                //求比例
                this.bili = this.bpic.outerWidth() / this.spic.outerWidth();

                //2.鼠标在小图中移动，小放跟随鼠标
                this.spic.on('mousemove', (e) => {
                    let $l = e.pageX - this.wrap.offset().left - this.sf.width() / 2;
                    let $t = e.pageY - this.wrap.offset().top - this.sf.height() / 2;
                    if ($l < 0) {
                        $l = 0;
                    } else if ($l >= this.spic.outerWidth() - this.sf.outerWidth()) {
                        $l = this.spic.outerWidth() - this.sf.outerWidth() - 2;
                    }

                    if ($t < 0) {
                        $t = 0;
                    } else if ($t >= this.spic.outerHeight() - this.sf.outerHeight()) {
                        $t = this.spic.outerHeight() - this.sf.outerHeight() - 2;
                    }

                    this.sf.css({
                        left: $l,
                        top: $t
                    });

                    //大图进行赋值
                    this.bpic.css({
                        left: -$l * this.bili,
                        top: -$t * this.bili
                    });
                });
            }, () => {
                $('.sf,.bf').css('visibility', 'hidden');
            });





        },
        //获取cookie
        cookie: function() {
            console.log(1);
            let id = location.search.substring(1).split('=')[1];
            this.count = $('.sl');
            let goodsnum = []; //商品的数量
            let goodsid = []; //商品的编号
            //cartnum  cartsid:本地存储的key值
            function getcookie() {
                if (localStorage.getItem('cartnum') && localStorage.getItem('cartsid')) {
                    goodsnum = localStorage.getItem('cartnum').split(',');
                    goodsid = localStorage.getItem('cartsid').split(',');
                }
            }
            $('.qq .lj').on('click', () => {
                getcookie();
                if ($.inArray(id, goodsid) === -1) { //第一次点击,将sid传入，取到数量直接传入
                    goodsid.push(id);
                    localStorage.setItem('cartsid', goodsid); //存入sid
                    goodsnum.push(this.count.val());
                    localStorage.setItem('cartnum', goodsnum); //存入数量
                } else {
                    let index = $.inArray(id, goodsid); //当前sid在数组中对应的位置
                    let newnum = parseInt(goodsnum[index]) + parseInt(this.count.val()); //原来存储的值+当前的值
                    goodsnum[index] = newnum; //新的数量
                    localStorage.setItem('cartnum', goodsnum); //存入数量
                }
            });


        }



    }
})