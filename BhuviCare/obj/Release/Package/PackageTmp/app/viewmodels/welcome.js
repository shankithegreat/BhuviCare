define(['plugins/router', '../services/home', 'knockout', 'jquery'],
    function (router, home, ko, jquery) {
        var vm = {
            msdata: ko.observableArray([]),
            dsData: ko.observableArray([]),
            ksData: ko.observableArray([]),
            activate: function () {

            },
            attached: function () {
                var self = this;
                home.getMS().pipe(function (data) {
                    self.msdata(data);
                    self.msdata();                    
                });

                home.getDS().pipe(function (data) {
                    self.dsData(data);
                    self.dsData();
                });

                home.getKS().pipe(function (data) {
                    self.ksData(data);
                    self.ksData();
                });
            }
        };
        return vm;
    });