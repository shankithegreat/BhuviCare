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

    public class CompanyInfo
    {
        public UserInfo UserInfo { get; set; }
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string Header { get; set; }
        public string Content { get; set; }
        public string PageTitle { get; set; }
    }

    public class VideoDetails
    {
        public string VideoHeader { get; set; }
        public string VideoUrl { get; set; }
    }

    public class PhotoDetails
    {
        public string PhotoHeader { get; set; }
        public string ThumbnailUrl { get; set; }
        public string PhotoUrl { get; set; }
    }

    public class News
    {
        public string NewsHeader { get; set; }
        public string NewsDetails { get; set; }
    }
}
