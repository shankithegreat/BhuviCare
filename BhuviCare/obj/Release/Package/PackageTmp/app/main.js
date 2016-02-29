requirejs.config({
    enforceDefine: true,
    waitSeconds: 200,
    paths: {
        'text': '../lib/require/text',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.3.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-2.1.1.min',
        'jquerymenu': '../lib/bootstrap/js/bootstrap-submenu.min',
        'materialize': '../lib/materialize/js/materialize.min',
        'velocity': '../lib/materialize/js/velocity.min',
        'hammerjs': '../lib/materialize/js/hammer.min',
        'responsiveTabs': '../lib/jquery/jquery.responsiveTabs.min',
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'jquerymenu': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'responsiveTabs': {
            deps: ['jquery']
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap', 'jquerymenu', 'responsiveTabs'], function (system, app, viewLocator, jquerymenu, responsiveTabs) {
    system.debug(false);
    app.title = 'South CPIM';
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