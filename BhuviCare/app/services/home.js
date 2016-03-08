define(['jquery', 'knockout'], function (jquery, ko) {
    var self = this;
    var serviceBase = "/api/";
    var tempData = {};
    var service = {
        getLob: function () {
            jquery.support.cors = true;
            return $.ajax({
                url: serviceBase + 'home/lob',
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

        updateLob: function (data) {
            jquery.support.cors = true;
            return $.ajax({
                url: serviceBase + 'update/updatelob',
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