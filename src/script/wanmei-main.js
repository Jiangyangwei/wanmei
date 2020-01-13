require.config({
    paths: {
        jquery: '../script/jquery.min',
        index: '../script/wanmei'

    },
    shim: {}
});
require(['jquery', 'wanmei'], function($, wanmei) {
    wanmei.xuanran(); //首页渲染功能
})