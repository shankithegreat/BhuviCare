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
            updatePhotos: function () {
                var self = this;
                home.updatePhotos().pipe(function (data) {
                    if (data == true || data == "OK" || data == "True") {
                        Materialize.toast('Saved Successfully!', 4000);
                    }
                });
            },
            updatepheader: function () {

            }
        };

        return vm;
    });