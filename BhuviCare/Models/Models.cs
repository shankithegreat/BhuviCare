using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BhuviCare.Models
{
    public class UserInfo
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public class LineOfBusiness
    {
        public UserInfo UserInfo { get; set; }
        public int Id { get; set; }
        public string PicUrl { get; set; }
        public string Header { get; set; }
        public string Link { get; set; }
        public string Action { get; set; }
        public string LobName { get; set; }
    }

    public class BannerData
    {
        public UserInfo UserInfo { get; set; }
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string NoteText { get; set; }
        public string ButtonLink { get; set; }
        public string Action { get; set; }
    }
}
