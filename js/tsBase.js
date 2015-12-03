/**
 * Created by sail on 2015/12/3.
 */
'use strict';


//var params = {};
//var url=window.location.search;
//var url=document.get;
//window.location.search.substr(1).split('&').forEach(function (pair) {
//    console.log(arguments);
//    var kv = pair.split('=');
//    params[kv[0]] = kv[1];
//});
//var target = params.target;
//var css = params.css;

// 解析页面对应的js文件路径，上面注释掉的是使用jsp时的解析方式。
var script = document.getElementsByTagName('script')[1];
var target = script.getAttribute('data-target');
var css = script.getAttribute('data-css');
console.log(target);

// 配置requirejs
requirejs.config({
    // 引入require-css
    map: {
        '*': {
            'css': 'js/css.js'
        }
    },
    // 定义模块路径
    paths: {
        angular: 'js/angular/angular',
        jquery: 'js/jquery/jquery-2.1.3.min',
        bootstrap: 'js/bootstrap/bootstrap',
        'bootstrap-css': 'js/bootstrap/bootstrap'
    },
    // 为非规范模块定义依赖关系和导出项
    shim: {
        angular: {
            exports: 'angular'
        }, bootstrap: {
            deps: ['css!bootstrap-css']
        }
    }
});

// 分别引入主js文件和主css文件
requirejs([target, 'css!' + css]);