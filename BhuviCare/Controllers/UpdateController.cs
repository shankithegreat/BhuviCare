using SouthCPIMWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace SouthCPIMWeb.Controllers
{
    public class UpdateController : ApiController
    {
        [Route("updatenews")]
        [HttpPost]
        [ActionName("updatenews")]
        public string UpdateNews(NewsContent newsContent)
        {
            try
            {
                if (Helper.Encrypt("cpimsouth").Equals(newsContent.UserInfo.UserName) && Helper.Encrypt("CPIMSouth@004").Equals(newsContent.UserInfo.Password))
                {
                    Business business = new Business();
                    return business.UpdateNews(newsContent);
                }

                return "Invalid Credentials";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [Route("updatephotos")]
        [HttpPost]
        [ActionName("updatephotos")]
        public string UpdatePhotos(PhotoContent photoContent)
        {
            try
            {
                if (Helper.Encrypt("cpimsouth").Equals(photoContent.UserInfo.UserName) && Helper.Encrypt("CPIMSouth@004").Equals(photoContent.UserInfo.Password))
                {
                    Business business = new Business();
                    return business.InsertPhotos(photoContent);
                }

                return "Invalid Credentials";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [Route("updatevideos")]
        [HttpPost]
        [ActionName("updatevideos")]
        public string UpdateVideos(VideoContent videoContent)
        {
            try
            {
                if (Helper.Encrypt("cpimsouth").Equals(videoContent.UserInfo.UserName) && Helper.Encrypt("CPIMSouth@004").Equals(videoContent.UserInfo.Password))
                {
                    Business business = new Business();
                    return business.UpdateVideos(videoContent);
                }

                return videoContent.UserInfo.UserName + "~" + videoContent.UserInfo.Password;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [Route("updateothers")]
        [HttpPost]
        [ActionName("updateothers")]
        public string UpdateOthers(OtherContents otherContents)
        {
            try
            {
                if (Helper.Encrypt("cpimsouth").Equals(otherContents.UserInfo.UserName) && Helper.Encrypt("CPIMSouth@004").Equals(otherContents.UserInfo.Password))
                {
                    Business business = new Business();
                    return business.UpdateOthers(otherContents);
                }

                return otherContents.UserInfo.UserName + "~" + otherContents.UserInfo.Password;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
