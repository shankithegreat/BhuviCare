using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SouthCPIMWeb.Models
{
    public class MSNews
    {
        public int NewsId { get; set; }
        public string CreatedTime { get; set; }
        public string NewsHeader { get; set; }
        public string NewsContent { get; set; }
        public string PicUrl { get; set; }
        public int Priority { get; set; }
    }

    public class NewsContent
    {
        public string TableName { get; set; }
        public string IsUpdate { get; set; }
        public string IsDelete { get; set; }
        public string IsInsert { get; set; }
        public MSNews MSNews { get; set; }
        public UserInfo UserInfo { get; set; }
    }

    public class PhotoContent
    {
        public string IsUpdate { get; set; }
        public string IsDelete { get; set; }
        public string IsInsert { get; set; }
        public string CategoryHeader { get; set; }
        public string ThumbnailUrl { get; set; }
        public List<Pictures> PicUrl { get; set; }
        public UserInfo UserInfo { get; set; }
    }

    public class VideoContent
    {
        public int VideoId { get; set; }
        public string VideoDesc { get; set; }
        public string VideoUrl { get; set; }
        public string IsUpdate { get; set; }
        public string IsDelete { get; set; }
        public string IsInsert { get; set; }
        public UserInfo UserInfo { get; set; }
    }

    public class OtherContents
    {
        public int Id { get; set; }
        public string TableName { get; set; }
        public string Header { get; set; }
        public string HtmlContent { get; set; }
        public UserInfo UserInfo { get; set; }
    }

    public class UserInfo
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public class GalleryDetails
    {
        public int PicCatId { get; set; }
        public string CategoryHeader { get; set; }
        public string ThumbnailUrl { get; set; }
        public List<Pictures> PicUrl { get; set; }
    }

    public class Pictures
    {
        public string PictureUrl { get; set; }
        public string ThumbnailUrl { get; set; }
    }

    public class VideoDetails
    {
        public int VideoId { get; set; }
        public string VideoDesc { get; set; }
        public string VideoUrl { get; set; }
        public string CreatedDate { get; set; }
    }
}
