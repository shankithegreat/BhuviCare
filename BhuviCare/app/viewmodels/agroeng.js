define(['plugins/router', '../services/home', 'knockout', 'jquery', 'pace', 'responsiveSlides'],
    function (router, home, ko, jquery, pace, responsiveSlides) {
        pace.start();
        var vm = {
            activate: function () {

            },
            attached: function () {
                var self = this;
                $("#slides1").responsiveSlides({
                    auto: true,
                    pagination: true,
                    nav: true,
                    fade: 500
                });
            },
        };

        return vm;
    });