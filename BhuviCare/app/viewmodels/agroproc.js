define(['plugins/router', '../services/home', 'knockout', 'jquery', 'pace', 'responsiveSlides'],
    function (router, home, ko, jquery, pace, responsiveSlides) {
        pace.start();
        var vm = {
            activate: function () {
                $("#slides1").responsiveSlides({
                    auto: true,
                    pagination: true,
                    nav: true,
                    fade: 500
                });
            },
            attached: function () {
                var self = this;
                $(".page-host").scrollTop(1);
            },
        };

        return vm;
    });