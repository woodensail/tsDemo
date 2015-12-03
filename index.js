/// <reference path="js/references.ts" />
// 上面这句用来关联reference库，所有的tsd文件都定义在reference.ts中
(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", 'angular', 'jquery'], function (require, exports) {
    // 分别引入angular和jquery并打印出来
    var ng = require('angular');
    var jq = require('jquery');
    console.log(ng, jq);
    $(function () {
        $('body').html('<p style="font-size: x-large">Hello World!</p>');
    });
});
//# sourceMappingURL=index.js.map