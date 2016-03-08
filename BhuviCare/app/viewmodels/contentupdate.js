'use strict';
define(['plugins/router', '../services/home', 'knockout', 'jquery', 'summernote', 'responsiveTabs'],
    function (router, home, ko, jquery, summernote, responsiveTabs) {
        var vm = {
            userInfo: {
                UserName: ko.observable(),
                Password: ko.observable()
            },
            lob: {
                picUrl: ko.observable(),
                header: ko.observable(),
                link: ko.observable(),
            },
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
                    //disabled: [3, 4],
                    activate: function (e, tab) {
                    },
                    activateState: function (e, state) {
                    }
                });


            },
            updateLob: function () {
                var self = this;
                var lobInput = {
                    UserInfo: self.userInfo,
                    PicUrl: self.lob.picUrl(),
                    Header: self.lob.header(),
                    Link: self.lob.link()
                };
                home.updateLob(lobInput).pipe(function (data) {
                    if (data == true || data == "OK" || data == "True") {
                        Materialize.toast('Saved Successfully!', 4000);
                    }
                    else {
                        Materialize.toast('Saving Failed!', 4000);
                    }
                });
            }
        };

        return vm;
    });