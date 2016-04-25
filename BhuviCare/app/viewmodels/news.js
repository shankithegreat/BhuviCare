/// <reference path="news.js" />
define(['plugins/router', '../services/home', 'knockout', 'jquery', 'pace'],
    function (router, home, ko, jquery, pace) {
        pace.start();
        var vm = {
            activate: function () {

            },
            attached: function () {
                var self = this;
                $(".page-host").scrollTop(1);
            },
        };

        return vm;
    });