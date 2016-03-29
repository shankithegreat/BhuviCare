'use strict';
define(['plugins/router', '../services/home', 'knockout', 'jquery'],
    function (router, home, ko, jquery) {
        var vm = {
            userInfo: {
                UserName: ko.observable(),
                Password: ko.observable()
            },
            activate: function () {
            },
            attached: function () {
                var self = this;
            },
        };

        return vm;
    });