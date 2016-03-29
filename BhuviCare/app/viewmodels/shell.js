define(['plugins/router', 'durandal/app'], function (router, app) {
    'use strict';
    return {
        router: router,
        search: function () {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        gallery: function () {
            router.navigate("#gallery");
        },
        activate: function () {
            sessionStorage.clear();
            router.map([
                { route: 'welcome', title: 'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'company', title: 'About', moduleId: 'viewmodels/company', nav: true },
                { route: 'lineofbusiness', title: 'LineOfBusiness', moduleId: 'viewmodels/lineofbusiness', nav: true },
                { route: 'agroinput', title: 'Agro Input', moduleId: 'viewmodels/agroinput', nav: true },
                { route: 'agroeng', title: 'Agro Engineering', moduleId: 'viewmodels/agroeng', nav: true },
                { route: 'agroproc', title: 'Agro Processing', moduleId: 'viewmodels/agroproc', nav: true },
                { route: 'lob', title: 'Line Of Business', moduleId: 'viewmodels/lob', nav: true },
                { route: 'contactus', title: 'Contact Us', moduleId: 'viewmodels/contactus', nav: true },
                { route: 'gallery', title: 'Media & Communications', moduleId: 'viewmodels/gallery', nav: true },
                { route: '', title: 'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'contentupdate', moduleId: 'viewmodels/contentupdate', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        },

        attached: function () {
            sessionStorage.clear();
            if (annyang) {
                var commands = {
                    'company': function () {
                        router.navigate("company");
                    },
                    'home': function () {
                        router.navigate("welcome");
                    },
                    'business': function () {
                        router.navigate("lineofbusiness");
                    }
                };

                annyang.addCommands(commands);
                annyang.start();
                console.log("Speech started");
            }
        }
    };
});