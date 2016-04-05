define(['plugins/router', '../services/home', 'knockout', 'jquery', 'pace', 'papercollapse'],
    function (router, home, ko, jquery, pace, papercollapse) {
        pace.start();
        var vm = {
            activate: function () {

            },
            attached: function () {
                var self = this;
                $(function () {
                    $(".collapse-card").paperCollapse();
                });
            },
        };

        return vm;
    });