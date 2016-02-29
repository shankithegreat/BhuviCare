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
                { route: '', title: 'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'contentupdate', moduleId: 'viewmodels/contentupdate', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        },

        attached: function () {
            sessionStorage.clear();
            if (annyang) {
                var commands = {
                    'photo': function () {
                        router.navigate("gallery");
                    },
                    'home': function () {
                        router.navigate("welcome");
                    },
                    'video': function () {
                        router.navigate("videos");
                    }
                };

                annyang.addCommands(commands);
                annyang.start();
                console.log("Speech started");
            }
        }
    };
});