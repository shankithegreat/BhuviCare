using BhuviCare.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace BhuviCare.Controllers
{
    public class UpdateController : ApiController
    {
        [Route("updatelob")]
        [HttpPost]
        [ActionName("updatelob")]
        public string UpdateLineOfBusiness(LineOfBusiness lineOfBusiness)
        {
            try
            {
                //if (Helper.Encrypt("bhuvicare").Equals(lineOfBusiness.UserInfo.UserName) && Helper.Encrypt("BhuviCare@004").Equals(lineOfBusiness.UserInfo.Password))
                //{
                Business business = new Business();
                return business.UpdateLob(lineOfBusiness);
                //}

                //return "Invalid Credentials";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [Route("updatebanner")]
        [HttpPost]
        [ActionName("updatebanner")]
        public string UpdateBanner(BannerData bannerData)
        {
            try
            {
                //if (Helper.Encrypt("bhuvicare").Equals(lineOfBusiness.UserInfo.UserName) && Helper.Encrypt("BhuviCare@004").Equals(lineOfBusiness.UserInfo.Password))
                //{
                Business business = new Business();
                return business.UpdateBanner(bannerData);
                //}

                //return "Invalid Credentials";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
        
        [Route("updatecompanyinfo")]
        [HttpPost]
        [ActionName("updatecompanyinfo")]
        public string UpdateCompanyInfo(CompanyInfo companyInfo)
        {
            try
            {
                //if (Helper.Encrypt("bhuvicare").Equals(lineOfBusiness.UserInfo.UserName) && Helper.Encrypt("BhuviCare@004").Equals(lineOfBusiness.UserInfo.Password))
                //{
                Business business = new Business();
                return business.UpdateCompanyInfo(companyInfo);
                //}

                //return "Invalid Credentials";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [Route("updatephoto")]
        [HttpPost]
        [ActionName("updatephoto")]
        public string UpdatePhoto(PhotoDetails photoDetails)
        {
            try
            {
                Business business = new Business();
                return business.UpdatePhoto(photoDetails);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [Route("updatevideo")]
        [HttpPost]
        [ActionName("updatevideo")]
        public string UpdateVideo(VideoDetails videoDetails)
        {
            try
            {
                Business business = new Business();
                return business.UpdateVideo(videoDetails);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        [Route("updatenews")]
        [HttpPost]
        [ActionName("updatenews")]
        public string UpdateNews(News news)
        {
            try
            {
                Business business = new Business();
                return business.UpdateNews(news);
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
