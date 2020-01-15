require.config({
    paths: {
        jquery: "../script/jquery.min",
        cartlist: "../script/cartlist"
    },
    shim: {

    }
});
require(['jquery', 'cartlist'], function($, cartlist) {
    cartlist.xuanran();
})