define(['plugins/router', '../services/home', 'knockout', 'jquery', 'pace'],
    function (router, home, ko, jquery, pace) {
        pace.start();
        var vm = {
            activate: function () {

            },
            attached: function () {
                var self = this;
            },
        };

        return vm;
    });