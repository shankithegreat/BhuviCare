define(['plugins/router', '../services/home', 'knockout', 'jquery'],
    function (router, home, ko, jquery) {
        var vm = {
            videos: ko.observableArray([]),
            name: ko.observable(),
            activate: function () {

            },

            attached: function () {
                var self = this;
                self.name.extend({ notify: 'always' });
                home.getVideos().pipe(function (data) {
                    self.videos(data);
                });
            },

            loadVideo: function (data) {
                var self = this;
                $('#vframe')[0].src = data.VideoUrl;
                $('#myModal').modal('show');
            }
        };

        return vm;
    });