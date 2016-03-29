'use strict';
define(['plugins/router', '../services/home', 'knockout', 'jquery', 'responsiveTabs'],
    function (router, home, ko, jquery, responsiveTabs) {
        var vm = {
            aboutUs: ko.observable(''),
            mission: ko.observable(''),
            vision: ko.observable(''),
            //objectives: ko.observable(''),

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

                home.getCompanyInfo().pipe(function (data) {
                    self.aboutUs(data[0]);
                    self.mission(data[1]);
                    self.vision(data[2]);
                    //self.objectives(data[3]);
                });
            },
        };

        return vm;
    });