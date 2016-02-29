define(['jquery', 'knockout'], function (jquery, ko) {
    var self = this;
    var serviceBase = "/api/";
    var tempData = {};
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

        updateOthers: function (data) {
            jquery.support.cors = true;
            return $.ajax({
                url: serviceBase + 'Update/updateothers', //'/api/Update/updatenews',
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
    };

    return service;
});