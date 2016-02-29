using SouthCPIMWeb.Models;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using System.Web.Http.Description;
using System;
using System.Web.Http.Cors;

namespace SouthCPIMWeb.Controllers
{
    public class HomeController : ApiController
    {
        [Route("getmsnews")]
        [HttpGet]
        [ActionName("msnews")]
        [ResponseType(typeof(HttpResponseMessage))]
        public HttpResponseMessage MSNews()
        {
            try
            {
                Business business = new Business();
                return Request.CreateResponse<List<List<MSNews>>>(System.Net.HttpStatusCode.OK, business.GetMSNews());
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("getdsnews")]
        [HttpGet]
        [ActionName("dsnews")]
        [ResponseType(typeof(HttpResponseMessage))]
        public HttpResponseMessage DSNews()
        {
            try
            {
                Business business = new Business();
                return Request.CreateResponse<List<List<MSNews>>>(System.Net.HttpStatusCode.OK, business.GetDSNews());
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("getksnews")]
        [HttpGet]
        [ActionName("ksnews")]
        [ResponseType(typeof(HttpResponseMessage))]
        public HttpResponseMessage KSNews()
        {
            try
            {
                Business business = new Business();
                return Request.CreateResponse<List<List<MSNews>>>(System.Net.HttpStatusCode.OK, business.GetKSNews());
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("getPhotoDetails")]
        [HttpGet]
        [ActionName("gallery")]
        [ResponseType(typeof(HttpResponseMessage))]
        public HttpResponseMessage GalleryDetails()
        {
            try
            {
                Business business = new Business();
                return Request.CreateResponse<List<GalleryDetails>>(System.Net.HttpStatusCode.OK, business.GetGalleryDetails());
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("getVideos")]
        [HttpGet]
        [ActionName("videos")]
        [ResponseType(typeof(HttpResponseMessage))]
        public HttpResponseMessage VideoDetails()
        {
            try
            {
                Business business = new Business();
                return Request.CreateResponse<List<VideoDetails>>(System.Net.HttpStatusCode.OK, business.GetVideoDetails());
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [HttpGet]
        [ActionName("others")]
        [ResponseType(typeof(HttpResponseMessage))]
        public HttpResponseMessage LoadOthers(string id)
        {
            try
            {
                Business business = new Business();
                return Request.CreateResponse<List<OtherContents>>(System.Net.HttpStatusCode.OK, business.LoadOthers(id));
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [HttpGet]
        [ActionName("othersbyid")]
        [ResponseType(typeof(HttpResponseMessage))]
        public HttpResponseMessage LoadOthersById(string id, string name)
        {
            try
            {
                Business business = new Business();
                return Request.CreateResponse<string>(System.Net.HttpStatusCode.OK, business.LoadOthersById(name, id));
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("gettestdata")]
        [HttpGet]
        [ActionName("testdata")]
        [ResponseType(typeof(HttpResponseMessage))]
        public HttpResponseMessage GetTestData()
        {
            try
            {
                return Request.CreateResponse<string>(System.Net.HttpStatusCode.OK, "test data");
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}