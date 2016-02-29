define(['plugins/router', '../services/home', 'knockout', 'jquery'],
    function (router, home, ko, jquery) {
        var vm = {
            pics: ko.observableArray([]),

            activate: function () {

            },

            attached: function () {
                var self = this;
                self.pics(JSON.parse(sessionStorage.picData).PicUrl);
            },

            loadImage: function (data) {
                $('#imageVwr')[0].src = data.PictureUrl;
            }
        };

        return vm;
    });