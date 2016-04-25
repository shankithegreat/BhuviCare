requirejs.config({
    enforceDefine: true,
    waitSeconds: 200,
    paths: {
        'text': '../lib/require/text',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'knockout': 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min',
        'bootstrap': 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min',
        'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min',
        'summernote': 'https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.1/summernote.min',
        'pace': 'https://cdnjs.cloudflare.com/ajax/libs/pace/1.0.2/pace.min',
        'responsiveSlides': '../lib/jquery/responsiveslides.min',
        'responsiveTabs': '../lib/jquery/jquery.responsiveTabs.min',
        'papercollapse': '../lib/papercollapse/js/paper-collapse.min'
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
        },
        'papercollapse': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'], function (system, app, viewLocator) {
    system.debug(false);
    app.title = mtitle;
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