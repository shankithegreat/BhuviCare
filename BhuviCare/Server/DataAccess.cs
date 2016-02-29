using SouthCPIMWeb.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SQLite;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SouthCPIMWeb
{
    public class DataAccess
    {
        public string ConnectionString { get; set; }

        private static TimeZoneInfo INDIAN_ZONE = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");

        public DataAccess()
        {
            this.ConnectionString = this.GetConnString();
        }

        private string GetConnString()
        {
            return @"Data Source=" + AppDomain.CurrentDomain.BaseDirectory + @"\App_Data\SouthCPIM.sqlite;Version=3;";
        }

        public DataSet GetMS()
        {
            string query = "select newsid,newsheader,newscontent,picurl,priority, cast(createdtime as varchar) as createddate from tblMS order by newsid desc  LIMIT " + Helper.GetAppKeyValue("newslimit") + ";";
            return ExecuteDataSet(query, "tblMS");
        }

        public DataSet GetDS()
        {
            string query = "select newsid,newsheader,newscontent,picurl,priority, cast(createdtime as varchar) as createddate from tblDS order by newsid desc  LIMIT " + Helper.GetAppKeyValue("newslimit") + ";";
            return ExecuteDataSet(query, "tblDS");
        }

        public DataSet GetKS()
        {
            string query = "select newsid,newsheader,newscontent,picurl,priority, cast(createdtime as varchar) as createddate from tblKS order by newsid desc  LIMIT " + Helper.GetAppKeyValue("newslimit") + ";";
            return ExecuteDataSet(query, "tblKS");
        }

        public void InsertNews(MSNews news, string tableName)
        {
            DateTime indianTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, INDIAN_ZONE);
            int newsId = GetMaxId(tableName, "newsid") + 1;
            string query = "INSERT INTO [" + tableName + "]([newsid],[createdtime],[newsheader],[newscontent],[picurl],[priority])";
            query += "VALUES(" + newsId + ",'" + indianTime.ToString("yyyy-MM-dd HH:mm") + "','" + news.NewsHeader + "','" + news.NewsContent + "','" + news.PicUrl + "','" + news.Priority + "');";
            ExecuteNonQuery(query);
        }

        public void InsertPhotos(PhotoContent photoContent)
        {
            if (photoContent.IsInsert.Equals("on", StringComparison.OrdinalIgnoreCase))
            {
                int maxId = GetMaxId("tblPictureCategory", "Id") + 1;
                string query = "INSERT INTO [tblPictureCategory]([Id],[CategoryHeader],[thumbnailUrl])VALUES(" + maxId + ",'" + photoContent.CategoryHeader + "','" + photoContent.ThumbnailUrl + "');";
                ExecuteNonQuery(query);

                foreach (var item in photoContent.PicUrl)
                {
                    int photoMaxId = GetMaxId("tblPhotos", "Id") + 1;
                    query = "INSERT INTO [tblPhotos]([Id],[PicCatId],[ThumbnailUrl],[PhotoUrl])VALUES(" + photoMaxId + "," + maxId + ",'" + item.ThumbnailUrl + "','" + item.PictureUrl + "');";
                    ExecuteNonQuery(query);
                }
            }
            else if (photoContent.IsUpdate.Equals("on", StringComparison.OrdinalIgnoreCase))
            {

            }
            else if (photoContent.IsDelete.Equals("on", StringComparison.OrdinalIgnoreCase))
            {
                //dataAccess.DeleteNews();
            }
        }

        public void UpdateVideos(VideoContent videoContent)
        {
            DateTime indianTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, INDIAN_ZONE);
            int maxId = GetMaxId("tblVideos", "Id") + 1;
            string query = "INSERT INTO [tblVideos]([Id],[VideoDesc],[VideoUrl],[CreatedDate])VALUES(" + maxId + ",'" + videoContent.VideoDesc + "','" + videoContent.VideoUrl + "','" + indianTime.ToString("yyyy-MM-dd HH:mm") + "');";
            ExecuteNonQuery(query);
        }

        public void UpdateOthers(OtherContents otherContents, string tableName)
        {
            DateTime indianTime = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, INDIAN_ZONE);
            int maxId = GetMaxId(tableName, "Id") + 1;
            string query = "INSERT INTO [" + tableName + "]([Id],[Header],[HtmlContent],[createdtime])VALUES(" + maxId + ",'" + otherContents.Header + "','" + otherContents.HtmlContent + "','" + indianTime.ToString("yyyy-MM-dd HH:mm") + "');";
            ExecuteNonQuery(query);
        }

        public DataSet LoadOthers(string tableName)
        {
            string query = "SELECT [Id],[Header],[createdtime] FROM [" + tableName + "];";
            return ExecuteDataSet(query, tableName);
        }

        public object LoadOthersById(string tableName, string id)
        {
            string query = "SELECT HtmlContent FROM " + tableName + " WHERE Id = " + id + ";";
            return ExecuteScalar(query);
        }

        private int GetMaxId(string tableName, string colName)
        {
            string query = "SELECT MAX(" + colName + ") FROM [" + tableName + "];";
            return Helper.ConvertToInt(ExecuteScalar(query));
        }

        public DataSet GetGalleryDetails()
        {
            string query = "select * from tblPictureCategory;select * from tblPhotos";
            return ExecuteDataSet(query, "tblGallery");
        }

        public DataSet GetVideoDetails()
        {
            string query = "select * from tblVideos order by CreatedDate desc";
            return ExecuteDataSet(query, "tblVideos");
        }

        private DataSet ExecuteDataSet(string query, string tableName)
        {
            DataSet ds = null;
            using (SQLiteConnection con = new SQLiteConnection(this.ConnectionString))
            {
                con.Open();

                ds = new DataSet();

                using (SQLiteDataAdapter da = new SQLiteDataAdapter(query, con))
                {
                    da.Fill(ds);
                }

                con.Close();
            }

            return ds;
        }

        private object ExecuteScalar(string query)
        {
            object value = null;
            using (SQLiteConnection con = new SQLiteConnection(this.ConnectionString))
            {
                con.Open();
                SQLiteCommand cmd = con.CreateCommand();
                cmd.CommandText = query;
                value = cmd.ExecuteScalar();
                con.Close();
            }

            return value;
        }

        private void ExecuteNonQuery(string query)
        {
            using (SQLiteConnection con = new SQLiteConnection(this.ConnectionString))
            {
                con.Open();
                SQLiteCommand cmd = con.CreateCommand();
                cmd.CommandText = query;
                cmd.ExecuteNonQuery();
                con.Close();
            }
        }
    }
}
