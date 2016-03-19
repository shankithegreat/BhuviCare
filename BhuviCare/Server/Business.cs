using BhuviCare.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace BhuviCare
{
    public class Business
    {
        private DataAccess dataAccess = null;
        public Business()
        {
            dataAccess = new DataAccess();
        }

        public List<LineOfBusiness> LineOfBusiness()
        {
            List<LineOfBusiness> lstMSNews = new List<LineOfBusiness>();
            using (DataSet ds = dataAccess.LineOfBusiness())
            {
                if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dataRow in ds.Tables[0].Rows)
                    {
                        LineOfBusiness lineOfBusiness = new LineOfBusiness()
                        {
                            Header = Helper.GetDbValue(dataRow["Header"]),
                            Id = Helper.ConvertToInt(dataRow["Id"]),
                            Link = Helper.GetDbValue(dataRow["ButtonLink"]),
                            PicUrl = Helper.GetDbValue(dataRow["PicUrl"]),
                        };

                        lstMSNews.Add(lineOfBusiness);
                    }
                }
            }

            return lstMSNews;
        }

        public List<BannerData> BannerData()
        {
            List<BannerData> lstMSNews = new List<BannerData>();
            using (DataSet ds = dataAccess.GetBannerData())
            {
                if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    foreach (DataRow dataRow in ds.Tables[0].Rows)
                    {
                        BannerData bannerData = new BannerData()
                        {
                            NoteText = Helper.GetDbValue(dataRow["NoteText"]),
                            Id = Helper.ConvertToInt(dataRow["Id"]),
                            ButtonLink = Helper.GetDbValue(dataRow["ButtonLink"]),
                            ImageUrl = Helper.GetDbValue(dataRow["ImageUrl"]),
                        };

                        lstMSNews.Add(bannerData);
                    }
                }
            }

            return lstMSNews;
        }

        public string UpdateLob(LineOfBusiness lineOfBusiness)
        {
            try
            {
                dataAccess.UpdateLob(lineOfBusiness);
                return "OK";
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public string UpdateBanner(BannerData bannerData)
        {
            try
            {
                dataAccess.UpdateUpdateBannerLob(bannerData);
                return "OK";
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
