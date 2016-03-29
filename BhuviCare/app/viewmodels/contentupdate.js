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
            companyInfo: {
                Id: ko.observable(),
                ImageUrl: ko.observable(),
                Header: ko.observable(),
                Content: ko.observable(),
                PageTitle: ko.observable()
            },
            lobData: ko.observableArray([]),
            selectedComCategory: ko.observable(),
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

                $('#widgetContent2').summernote({
                    height: 300,                 // set editor height
                    minHeight: null,             // set minimum height of editor
                    maxHeight: null,             // set maximum height of editor
                    focus: true,
                    oninit: function () {
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
            },
            updateCompInfo: function () {
                var self = this;
                var compInfo = {
                    Id: self.selectedComCategory() != undefined ? self.selectedComCategory()[0] : 1,
                    UserInfo: self.userInfo,
                    ImageUrl: self.companyInfo.ImageUrl(),
                    Header: self.companyInfo.Header(),
                    Content: $('#widgetContent2').code(),
                    PageTitle: self.companyInfo.PageTitle(),
                };
                home.updateCompInfo(compInfo).pipe(function (data) {
                    //debugger;
                    if (data == true || data == "OK" || data == "True") {
                        alert('Saved Successfully!');
                    }
                    else {
                        alert('Saving Failed!');
                    }
                });
            },
        };

        return vm;
    });