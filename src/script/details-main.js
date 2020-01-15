require.config({
    paths: {
        jquery: "../script/jquery.min",
        details: "../script/details"
    },
    shim: {

    }
});
require(['jquery', 'details'], function($, details) {

    details.xuanran();
    details.tab();
    details.fdj();
    details.cookie();
})