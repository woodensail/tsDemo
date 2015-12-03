/// <reference path="js/references.ts" />
// 上面这句用来关联reference库，所有的tsd文件都定义在reference.ts中

// 分别引入angular和jquery并打印出来
import * as ng from 'angular';
import * as jq from 'jquery';
console.log(ng, jq);

$(function () {
    $('body').html('<p style="font-size: x-large">Hello World!</p>');
});