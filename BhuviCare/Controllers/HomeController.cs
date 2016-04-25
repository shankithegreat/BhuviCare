using BhuviCare.Models;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using System.Web.Http.Description;
using System;
using System.Web.Http.Cors;

namespace BhuviCare.Controllers
{
    public class HomeController : ApiController
    {
        [Route("lob")]
        [HttpGet]
        [ActionName("lob")]
        [ResponseType(typeof(HttpResponseMessage))]
        public HttpResponseMessage LineOfBusiness()
        {
            try
            {
                Business business = new Business();
                return Request.CreateResponse<List<LineOfBusiness>>(System.Net.HttpStatusCode.OK, business.LineOfBusiness());
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("companyinfo")]
        [HttpGet]
        [ActionName("companyinfo")]
        [ResponseType(typeof(HttpResponseMessage))]
        public HttpResponseMessage CompanyInfo()
        {
            try
            {
                Business business = new Business();
                return Request.CreateResponse<List<CompanyInfo>>(System.Net.HttpStatusCode.OK, business.CompanyInfo(0));
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex.Message);
            }
        }

        [Route("photos")]
        [HttpGet]
        [ActionName("photos")]
        [ResponseType(typeof(HttpResponseMessage))]
        public HttpResponseMessage LoadPhotos()
        {
            try
            {
                Business business = new Business();
                return Request.CreateResponse<List<List<PhotoDetails>>>(System.Net.HttpStatusCode.OK, business.LoadPhotos());
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(System.Net.HttpStatusCode.BadRequest, ex.Message);
            }
        }
    }
}