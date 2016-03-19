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
                action: ko.observable(),
                lobName: ko.observable()
            },
            lobData: ko.observableArray([]),
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

                home.getLob().pipe(function (data) {
                    self.lobData(data);
                });
            },
            updateLob: function () {
                var self = this;
                var lobInput = {
                    UserInfo: self.userInfo,
                    PicUrl: self.lob.picUrl(),
                    Header: self.lob.header(),
                    Link: self.lob.link(),
                    Action: self.lob.action(),
                    LobName: self.lob.lobName()
                };
                home.updateLob(lobInput).pipe(function (data) {
                    //debugger;
                    if (data == true || data == "OK" || data == "True") {
                        alert('Saved Successfully!');
                    }
                    else {
                        alert('Saving Failed!');
                    }
                });
            }
        };

        return vm;
    });