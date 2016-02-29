requirejs.config({
    enforceDefine: true,
    waitSeconds: 200,
    paths: {
        'text': '../lib/require/text',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.1.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap.min',
        'jquery': '../lib/jquery/jquery-2.1.1.min',
        'summernote': '../lib/summernote/summernote.min',
        'pace': '../lib/pace/js/pace.min',
        'responsiveSlides': '../lib/jquery/responsiveslides.min',
        'responsiveTabs': '../lib/jquery/jquery.responsiveTabs.min',
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'responsiveSlides': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'responsiveTabs': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'summernote': {
            deps: ['jquery', 'bootstrap']
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'], function (system, app, viewLocator) {
    system.debug(true);
    app.title = 'BhuviCare';
    app.configurePlugins({
        router: true,
        dialog: true,
        widget: true
    });

    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});