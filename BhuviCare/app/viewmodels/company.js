define(['plugins/router', '../services/home', 'knockout', 'jquery', 'responsiveTabs'],
    function (router, home, ko, jquery, responsiveTabs) {
        var vm = {
            activate: function () {

            },
            attached: function () {
                var self = this;
                var $tabs = $('#horizontalTab');
                $tabs.responsiveTabs({
                    rotate: false,
                    startCollapsed: 'accordion',
                    collapsible: 'accordion',
                    setHash: false,
                    activate: function (e, tab) {
                    },
                    activateState: function (e, state) {
                    }
                });
            },
        };

        return vm;
    });