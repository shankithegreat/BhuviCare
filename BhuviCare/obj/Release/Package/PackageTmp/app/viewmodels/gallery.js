define(['plugins/router', '../services/home', 'knockout', 'jquery'],
    function (router, home, ko, jquery) {
        var vm = {
            galleries: ko.observableArray([]),
            activate: function () {

            },

            attached: function () {
                var self = this;
                home.getGallery().pipe(function (data) {
                    self.galleries(data);
                });
            },

            loadImage: function (data) {
                sessionStorage.picData = ko.toJSON(data);
                router.navigate("#picviewer");
            }
        };

        return vm;
    });