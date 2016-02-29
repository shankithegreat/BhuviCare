using SouthCPIMWeb.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SouthCPIMWeb
{
    public class Business
    {
        private DataAccess dataAccess = null;
        public Business()
        {
            dataAccess = new DataAccess();
        }

        public List<List<MSNews>> GetMSNews()
        {
            List<List<MSNews>> lstMSNews = new List<List<MSNews>>();
            List<MSNews> msNewsRow = new List<MSNews>();
            using (DataSet ds = dataAccess.GetMS())
            {
                if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    int totalCount = ds.Tables[0].Rows.Count;
                    int index = 0;
                    int tempCount = 0;
                    foreach (DataRow dataRow in ds.Tables[0].Rows)
                    {
                        MSNews msNews = new MSNews()
                        {
                            CreatedTime = Helper.GetDbValue(dataRow["createddate"]),
                            NewsContent = Helper.GetDbValue(dataRow["newscontent"]),
                            NewsHeader = Helper.GetDbValue(dataRow["newsheader"]),
                            NewsId = Helper.ConvertToInt(dataRow["newsid"]),
                            PicUrl = Helper.GetDbValue(dataRow["picurl"]),
                            Priority = Helper.ConvertToInt(dataRow["priority"])
                        };

                        msNewsRow.Add(msNews);
                        tempCount += 1;
                        index += 1;

                        if (tempCount == 3 || index == totalCount)
                        {
                            tempCount = 0;
                            lstMSNews.Add(msNewsRow);
                            msNewsRow = new List<MSNews>();
                        }
                    }
                }
            }

            return lstMSNews;
        }

        public List<List<MSNews>> GetDSNews()
        {
            List<List<MSNews>> lstMSNews = new List<List<MSNews>>();
            List<MSNews> msNewsRow = new List<MSNews>();
            using (DataSet ds = dataAccess.GetDS())
            {
                if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    int totalCount = ds.Tables[0].Rows.Count;
                    int index = 0;
                    int tempCount = 0;
                    foreach (DataRow dataRow in ds.Tables[0].Rows)
                    {
                        MSNews msNews = new MSNews()
                        {
                            CreatedTime = Helper.GetDbValue(dataRow["createddate"]),
                            NewsContent = Helper.GetDbValue(dataRow["newscontent"]),
                            NewsHeader = Helper.GetDbValue(dataRow["newsheader"]),
                            NewsId = Helper.ConvertToInt(dataRow["newsid"]),
                            PicUrl = Helper.GetDbValue(dataRow["picurl"]),
                            Priority = Helper.ConvertToInt(dataRow["priority"])
                        };

                        msNewsRow.Add(msNews);
                        tempCount += 1;
                        index += 1;

                        if (tempCount == 3 || index == totalCount)
                        {
                            tempCount = 0;
                            lstMSNews.Add(msNewsRow);
                            msNewsRow = new List<MSNews>();
                        }
                    }
                }
            }

            return lstMSNews;
        }

        public List<List<MSNews>> GetKSNews()
        {
            List<List<MSNews>> lstKSNews = new List<List<MSNews>>();
            List<MSNews> msNewsRow = new List<MSNews>();
            using (DataSet ds = dataAccess.GetKS())
            {
                if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    int totalCount = ds.Tables[0].Rows.Count;
                    int index = 0;
                    int tempCount = 0;
                    foreach (DataRow dataRow in ds.Tables[0].Rows)
                    {
                        MSNews msNews = new MSNews()
                        {
                            CreatedTime = Helper.GetDbValue(dataRow["createddate"]),
                            NewsContent = Helper.GetDbValue(dataRow["newscontent"]),
                            NewsHeader = Helper.GetDbValue(dataRow["newsheader"]),
                            NewsId = Helper.ConvertToInt(dataRow["newsid"]),
                            PicUrl = Helper.GetDbValue(dataRow["picurl"]),
                            Priority = Helper.ConvertToInt(dataRow["priority"])
                        };

                        msNewsRow.Add(msNews);
                        tempCount += 1;
                        index += 1;

                        if (tempCount == 3 || index == totalCount)
                        {
                            tempCount = 0;
                            lstKSNews.Add(msNewsRow);
                            msNewsRow = new List<MSNews>();
                        }
                    }
                }
            }

            return lstKSNews;
        }

        public List<GalleryDetails> GetGalleryDetails()
        {
            List<GalleryDetails> lstGalleryDetails = new List<GalleryDetails>();
            using (DataSet ds = dataAccess.GetGalleryDetails())
            {
                if (ds != null && ds.Tables.Count > 0)
                {
                    DataTable dtPicHeader = ds.Tables[0];
                    DataTable dtPicUrl = ds.Tables[1];
                    if (dtPicHeader.Rows.Count > 0)
                    {
                        foreach (DataRow dr in dtPicHeader.Rows)
                        {
                            GalleryDetails galleryDetails = new GalleryDetails()
                                          {
                                              CategoryHeader = Helper.GetDbValue(dr["CategoryHeader"]),
                                              PicCatId = Helper.ConvertToInt(dr["Id"]),
                                              ThumbnailUrl = Helper.GetDbValue(dr["thumbnailUrl"]),
                                              PicUrl = GetPictureUrl(Helper.ConvertToInt(dr["Id"]), dtPicUrl)
                                          };

                            lstGalleryDetails.Add(galleryDetails);
                        }
                    }
                }
            }

            return lstGalleryDetails;
        }

        private List<Pictures> GetPictureUrl(int picCatId, DataTable dtPicUrl)
        {
            List<Pictures> lstPics = new List<Pictures>();
            if (dtPicUrl.Rows.Count > 0)
            {
                DataRow[] picRows = dtPicUrl.Select("PicCatId=" + picCatId);
                foreach (DataRow dr in picRows)
                {
                    Pictures pictures = new Pictures()
                    {
                        PictureUrl = Helper.GetDbValue(dr["PhotoUrl"]),
                        ThumbnailUrl = Helper.GetDbValue(dr["ThumbnailUrl"])
                    };

                    lstPics.Add(pictures);
                }
            }

            return lstPics;
        }

        public List<VideoDetails> GetVideoDetails()
        {
            List<VideoDetails> lstVideoDetails = new List<VideoDetails>();
            using (DataSet ds = dataAccess.GetVideoDetails())
            {
                if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dr in ds.Tables[0].Rows)
                    {
                        lstVideoDetails.Add(new VideoDetails()
                        {
                            VideoId = Helper.ConvertToInt(dr["Id"]),
                            VideoDesc = Helper.GetDbValue(dr["VideoDesc"]),
                            VideoUrl = Helper.GetDbValue(dr["VideoUrl"]),
                            CreatedDate = Helper.GetDbValue(dr["CreatedDate"])
                        });
                    }
                }
            }

            return lstVideoDetails;
        }

        public string UpdateNews(NewsContent newsContent)
        {
            try
            {
                if (newsContent.IsInsert.Equals("on", StringComparison.OrdinalIgnoreCase))
                {
                    dataAccess.InsertNews(newsContent.MSNews, newsContent.TableName);
                }
                else if (newsContent.IsUpdate.Equals("on", StringComparison.OrdinalIgnoreCase))
                {
                    //dataAccess.UpdateNews();
                }
                else if (newsContent.IsDelete.Equals("on", StringComparison.OrdinalIgnoreCase))
                {
                    //dataAccess.DeleteNews();
                }

                return "OK";
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public string InsertPhotos(PhotoContent photoContent)
        {
            try
            {
                dataAccess.InsertPhotos(photoContent);
                return "OK";
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public string UpdateVideos(VideoContent videoContent)
        {
            try
            {
                dataAccess.UpdateVideos(videoContent);
                return "OK";
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public string UpdateOthers(OtherContents otherContents)
        {
            try
            {
                otherContents.HtmlContent = System.Web.HttpUtility.HtmlEncode(otherContents.HtmlContent);
                dataAccess.UpdateOthers(otherContents, otherContents.TableName);
                return "OK";
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<OtherContents> LoadOthers(string tableName)
        {
            List<OtherContents> lstOtherContents = new List<OtherContents>();
            try
            {
                using (DataSet ds = dataAccess.LoadOthers(tableName))
                {
                    if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                    {
                        foreach (DataRow dr in ds.Tables[0].Rows)
                        {
                            lstOtherContents.Add(new OtherContents()
                            {
                                Header = Helper.GetDbValue(dr["Header"]),
                                //HtmlContent = System.Web.HttpUtility.HtmlEncode(Helper.GetDbValue(dr["HtmlContent"])),
                                Id = Helper.ConvertToInt(dr["Id"]),
                                TableName = string.Empty,
                                UserInfo = null
                            });
                        }
                    }
                }

                return lstOtherContents;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public string LoadOthersById(string tableName, string id)
        {
            try
            {
                string htmlContent = Helper.GetDbValue(dataAccess.LoadOthersById(tableName, id));
                return System.Web.HttpUtility.HtmlDecode(htmlContent);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }


    public static class Helper
    {
        public static string GetDbValue(object value)
        {
            if (value != DBNull.Value && value != null && !string.IsNullOrEmpty(value.ToString()))
            {
                return value.ToString();
            }

            return string.Empty;
        }

        public static int ConvertToInt(object value)
        {
            if (value != DBNull.Value && value != null && !string.IsNullOrEmpty(value.ToString()))
            {
                int retVal;
                int.TryParse(value.ToString(), out retVal);
                return retVal;
            }

            return 0;
        }

        public static string GetAppKeyValue(string key)
        {
            if (System.Configuration.ConfigurationManager.AppSettings[key] != null)
            {
                return System.Configuration.ConfigurationManager.AppSettings[key];
            }

            return string.Empty;
        }

        public static string Encrypt(string clearText)
        {
            string EncryptionKey = "CPIM4SOUTH61984";
            byte[] clearBytes = Encoding.Unicode.GetBytes(clearText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                        cs.Close();
                    }
                    clearText = Convert.ToBase64String(ms.ToArray());
                }
            }

            return clearText;
        }

        public static string Decrypt(string cipherText)
        {
            string EncryptionKey = "CPIM4SOUTH61984";
            byte[] cipherBytes = Convert.FromBase64String(cipherText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                        cs.Close();
                    }
                    cipherText = Encoding.Unicode.GetString(ms.ToArray());
                }
            }

            return cipherText;
        }
    }
}
