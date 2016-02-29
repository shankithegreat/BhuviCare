define(['jquery', 'knockout'], function (jquery, ko) {
    var self = this;
    var serviceBase = "/api/";
    var service = {
        getMS: function () {
            jquery.support.cors = true;
            return $.ajax({
                url: serviceBase + 'home/msnews',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    //alert(data);
                },
                error: function (x, y, z) {
                    alert(x + '\n' + y + '\n' + z);
                }
            });
        },

        getDS: function () {
            jquery.support.cors = true;
            return $.ajax({
                url: serviceBase + 'home/dsnews',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    //alert(data);
                },
                error: function (x, y, z) {
                    alert(x + '\n' + y + '\n' + z);
                }
            });
        },

        getKS: function () {
            jquery.support.cors = true;
            return $.ajax({
                url: serviceBase + 'home/ksnews',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    //alert(data);
                },
                error: function (x, y, z) {
                    alert(x + '\n' + y + '\n' + z);
                }
            });
        },

        updateNews: function (data) {
            jquery.support.cors = true;
            return $.ajax({
                url: serviceBase + 'Update/updatenews', //'/api/Update/updatenews',
                type: 'POST',
                data: ko.toJSON(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                success: function (data) {

                },
                error: function (x, y, z) {
                    alert(ko.toJSON(x) + ko.toJSON(x) + ko.toJSON(x));
                }
            });
        },

        updatePhotos: function(data){
            jquery.support.cors = true;
            return $.ajax({
                url: serviceBase + 'Update/updatephotos', //'/api/Update/updatenews',
                type: 'POST',
                data: ko.toJSON(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                success: function (data) {

                },
                error: function (x, y, z) {
                    alert(ko.toJSON(x) + ko.toJSON(x) + ko.toJSON(x));
                }
            });
        },

        updateVideo: function (data) {
            jquery.support.cors = true;
            return $.ajax({
                url: serviceBase + 'Update/updatevideos', //'/api/Update/updatenews',
                type: 'POST',
                data: ko.toJSON(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                dataType: 'json',
                success: function (data) {

                },
                error: function (x, y, z) {
                    alert(ko.toJSON(x) + ko.toJSON(x) + ko.toJSON(x));
                }
            });
        },

        getGallery: function () {
            jquery.support.cors = true;
            return $.ajax({
                url: serviceBase + 'home/gallery',
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    //alert(data);
                },
                error: function (x, y, z) {
                    alert(x + '\n' + y + '\n' + z);
                }
            });
        },

        getVideos: function () {
            jquery.support.cors = true;
            return $.ajax({
                url: serviceBase + 'Home/videos',
                type: 'GET',
                dataType: 'json',
                success: function (data) {

                },
                error: function (x, y, z) {

                }
            });
        },
    };

    return service;
});