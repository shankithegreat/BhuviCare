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
    }
}
