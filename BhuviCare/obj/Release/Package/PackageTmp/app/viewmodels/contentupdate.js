define(['plugins/router', '../services/home', 'knockout', 'jquery'],
    function (router, home, ko, jquery) {
        var vm = {
            msNews: {
                NewsId: ko.observable(),
                NewsHeader: ko.observable(),
                NewsContent: ko.observable(),
                PicUrl: ko.observable(),
                Priority: ko.observable()
            },
            userInfo: {
                UserName: ko.observable(),
                Password: ko.observable()
            },
            newsContent: {
                TableName: ko.observable(),
                IsUpdate: ko.observable(),
                IsDelete: ko.observable(),
                IsInsert: ko.observable(),
            },
            photoContent: {
                CategoryHeader: ko.observable(),
                ThumbnailUrl: ko.observable(),
                PicUrl: ko.observableArray([]),
                tmpPic: {
                    PictureUrl: ko.observable(),
                    ThumbnailUrl: ko.observable()
                },
                IsUpdate: ko.observable(),
                IsDelete: ko.observable(),
                IsInsert: ko.observable(),
            },
            videoContent: {
                VideoDesc: ko.observable(),
                VideoUrl: ko.observable(),
                IsUpdate: ko.observable(),
                IsDelete: ko.observable(),
                IsInsert: ko.observable(),
            },
            activate: function () {

            },

            attached: function () {
                var self = this;
                var $tabs = $('#horizontalTab');
                $tabs.responsiveTabs({
                    rotate: false,
                    startCollapsed: 'accordion',
                    collapsible: 'accordion',
                    setHash: true,
                    //disabled: [3, 4],
                    activate: function (e, tab) {
                    },
                    activateState: function (e, state) {
                    }
                });
            },

            updateNews: function () {
                var self = this;
                var NC = {
                    TableName: self.newsContent.TableName,
                    IsUpdate: self.newsContent.IsUpdate,
                    IsDelete: self.newsContent.IsDelete,
                    IsInsert: self.newsContent.IsInsert,
                    MSNews: {
                        NewsId: self.msNews.NewsId,
                        NewsHeader: self.msNews.NewsHeader,
                        NewsContent: self.msNews.NewsContent,
                        PicUrl: self.msNews.PicUrl,
                        Priority: self.msNews.Priority
                    },
                    UserInfo: {
                        UserName: self.userInfo.UserName,
                        Password: self.userInfo.Password
                    }
                };

                home.updateNews(NC).pipe(function (data) {
                    if (data == true || data == "OK" || data == "True") {
                        Materialize.toast('Saved Successfully!', 4000);
                    }
                    else {
                        Materialize.toast('Saving Failed!', 4000);
                    }
                });
            },

            addPics: function () {
                var self = this;
                var picObj = {
                    PictureUrl: self.photoContent.tmpPic.PictureUrl(),
                    ThumbnailUrl: self.photoContent.tmpPic.ThumbnailUrl()
                }
                self.photoContent.PicUrl.push(picObj);
            },

            updatePhotos: function () {
                var self = this;
                var photoCnt = {
                    IsUpdate: self.photoContent.IsUpdate(),
                    IsDelete: self.photoContent.IsDelete(),
                    IsInsert: self.photoContent.IsInsert(),
                    CategoryHeader: self.photoContent.CategoryHeader(),
                    ThumbnailUrl: self.photoContent.ThumbnailUrl(),
                    PicUrl: self.photoContent.PicUrl(),
                    UserInfo: {
                        UserName: self.userInfo.UserName,
                        Password: self.userInfo.Password
                    }
                };
                home.updatePhotos(photoCnt).pipe(function (data) {
                    if (data == true || data == "OK" || data == "True") {
                        Materialize.toast('Saved Successfully!', 4000);
                    }
                    else {
                        Materialize.toast('Saving Failed!', 4000);
                    }
                });
            },

            updateVideo: function () {
                var self = this;
                var videoCnt = {
                    IsUpdate: self.videoContent.IsUpdate(),
                    IsDelete: self.videoContent.IsDelete(),
                    IsInsert: self.videoContent.IsInsert(),
                    VideoDesc: self.videoContent.VideoDesc,
                    VideoUrl: self.videoContent.VideoUrl,
                    UserInfo: {
                        UserName: self.userInfo.UserName,
                        Password: self.userInfo.Password
                    }
                };

                home.updateVideo(videoCnt).pipe(function (data) {
                    if (data == true || data == "OK" || data == "True") {
                        Materialize.toast('Saved Successfully!', 4000);
                    }
                    else {
                        Materialize.toast('Saving Failed!', 4000);
                    }
                });
            }
        };

        return vm;
    });