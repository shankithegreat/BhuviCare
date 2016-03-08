using BhuviCare.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SQLite;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BhuviCare
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
            return @"Data Source=" + AppDomain.CurrentDomain.BaseDirectory + @"\App_Data\BhuviCare.sqlite;Version=3;";
        }

        public DataSet LineOfBusiness()
        {
            string query = "select id,PicUrl,Header,ButtonLink from tblLineOfBusiness";
            return ExecuteDataSet(query, "tblLineOfBusiness");
        }

        public void UpdateLob(LineOfBusiness lineOfBusiness)
        {
            int maxId = GetMaxId("tblLineOfBusiness", "Id") + 1;
            string query = "INSERT INTO [tblLineOfBusiness]([Id],[PicUrl],[Header],[ButtonLink])VALUES(" + maxId + ",'" + lineOfBusiness.PicUrl + "','" + lineOfBusiness.Header + "','" + lineOfBusiness.Link + "');";
            ExecuteNonQuery(query);
        }

        private int GetMaxId(string tableName, string colName)
        {
            string query = "SELECT MAX(" + colName + ") FROM [" + tableName + "];";
            return Helper.ConvertToInt(ExecuteScalar(query));
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
