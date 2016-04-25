define(['plugins/router', '../services/home', 'knockout', 'jquery', 'pace'],
    function (router, home, ko, jquery, pace) {
        pace.start();
        var vm = {
            photos: ko.observableArray([]),
            activate: function () {

            },
            attached: function () {
                var self = this;
                $(".page-host").scrollTop(1);
                home.getPhotos().pipe(function (data) {
                    self.photos(data);
                });
            },
        };

        return vm;
    });