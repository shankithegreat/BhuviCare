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
                { route: 'welcome', title: 'BhuviCare', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'company', title: 'BhuviCare-AboutUs', moduleId: 'viewmodels/company', nav: true },
                { route: 'lineofbusiness', title: 'BhuviCare-Lines Of Businesses', moduleId: 'viewmodels/lineofbusiness', nav: true },
                { route: 'agroinput', title: 'Agro Input', moduleId: 'viewmodels/agroinput', nav: true },
                { route: 'agroeng', title: 'Agro Engineering', moduleId: 'viewmodels/agroeng', nav: true },
                { route: 'agroproc', title: 'Agro Processing', moduleId: 'viewmodels/agroproc', nav: true },
                { route: 'agroplant', title: 'Agro Plantation', moduleId: 'viewmodels/agroplant', nav: true },
                { route: 'agrotrade', title: 'Agro Trading', moduleId: 'viewmodels/agrotrade', nav: true },
                { route: 'lob', title: 'Lines Of Businesses', moduleId: 'viewmodels/lob', nav: true },
                { route: 'contactus', title: 'Contact Us', moduleId: 'viewmodels/contactus', nav: true },
                { route: 'gallery', title: 'Media & Communications', moduleId: 'viewmodels/gallery', nav: true },
                { route: 'photos', title: 'Photos', moduleId: 'viewmodels/photos', nav: true },
                { route: 'videos', title: 'Videos', moduleId: 'viewmodels/videos', nav: true },
                { route: 'news', title: 'News', moduleId: 'viewmodels/news', nav: true },
                { route: '', title: 'BhuviCare', moduleId: mid, nav: true },
                { route: 'contentupdate', moduleId: 'viewmodels/contentupdate', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        },

        attached: function () {
            sessionStorage.clear();
            //if (annyang) {
            //    var commands = {
            //        'company': function () {
            //            router.navigate("company");
            //        },
            //        'home': function () {
            //            router.navigate("welcome");
            //        },
            //        'business': function () {
            //            router.navigate("lineofbusiness");
            //        }
            //    };

            //    //annyang.addCommands(commands);
            //    //annyang.start();
            //    console.log("Speech started");
            //}
        }
    };
});