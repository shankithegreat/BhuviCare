define(['plugins/router', '../services/home', 'knockout', 'jquery', 'summernote', 'responsiveTabs'],
    function (router, home, ko, jquery, summernote, responsiveTabs) {
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
                    setHash: true,
                    //disabled: [3, 4],
                    activate: function (e, tab) {
                    },
                    activateState: function (e, state) {
                    }
                });

                $('#widgetContent1').summernote({
                    height: 300,                 // set editor height
                    minHeight: null,             // set minimum height of editor
                    maxHeight: null,             // set maximum height of editor
                    focus: true,
                    oninit: function () {
                    }
                });
            },
        };

        return vm;
    });