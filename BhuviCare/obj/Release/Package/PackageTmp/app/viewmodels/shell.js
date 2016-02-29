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
                { route: '', title: 'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'gallery', title: 'Gallery', moduleId: 'viewmodels/gallery', nav: true },
                { route: 'picviewer', title: 'Picture Viewer', moduleId: 'viewmodels/picviewer', nav: true },
                { route: 'videos', title: 'Videos', moduleId: 'viewmodels/videos', visible: false },
                { route: 'elections', moduleId: 'viewmodels/elections', nav: true },
                { route: 'finance', moduleId: 'viewmodels/finance', nav: true },
                { route: 'finance', moduleId: 'viewmodels/finance', nav: true },
                { route: 'finance', moduleId: 'viewmodels/finance', nav: true },
                { route: 'finance', moduleId: 'viewmodels/finance', nav: true },
                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true },
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

            $('.dropdown > a[tabindex]').on('keydown', function (event) {
                // 13: Return

                if (event.keyCode === 13) {
                    $(this).dropdown('toggle');
                }
            });

            // Предотвращаем закрытие при клике на неактивный элемент списка
            $('.dropdown-menu > .disabled, .dropdown-header').on('click.bs.dropdown.data-api', function (event) {
                event.stopPropagation();
            });

            $('.dropdown-submenu > a').submenupicker();
        }
    };
});