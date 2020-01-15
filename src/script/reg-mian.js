require.config({
    paths: {
        jaquery: "../script/jquery.min",
        reg: "../script/reg"
    },
    shim: {

    }
});
require(['jquery', 'reg'], function($, reg) {
    reg.reg();
})