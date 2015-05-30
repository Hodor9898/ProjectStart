using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Driver;

namespace StarTeamApp.Server
{
    public static class InitMongo
    {
        public const string ConnectionString = "mongodb://localhost:27020/mydb";
        static InitMongo()
        {
            
        }

        public static void A()
        {
            MongoClient client = new MongoClient(ConnectionString);
            MongoServer server = client.GetServer();
            MongoDatabase database = server.GetDatabase("mydb");  
        }
    }
}