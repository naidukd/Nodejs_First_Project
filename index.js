const express=require('express');
const app=express();
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const path=require("path");
app.use(express.json());
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const Get_Books = require("D:\\NodeJs\\myapp\\Routers\\Get_Books.js");
const Delete_Books = require("D:\\NodeJs\\myapp\\Routers\\Delete_Books_path.js");
const Insert_Books = require("D:\\NodeJs\\myapp\\Routers\\Insert_Books.js");
const UserRegistration = require("D:\\NodeJs\\myapp\\User_Authentication\\User_Registration.js");
const Login = require("D:\\NodeJs\\myapp\\User_Authentication\\Login_Verify_Token.js")



const dbpath=path.join("E:\sqlite3_db","first.db");
const intialDBServer=async () => {
  try{  
db=await open({filename:dbpath,
     driver:sqlite3.Database,
    });

    app.set("db",db);

app.listen(3000,()=>
{
    console.log("successfully connected");
    
});

  }
  catch(e)
  {
    console.log("error message" +e.message);
  }
}

intialDBServer();


app.use("/GetBooks/",Get_Books);
app.use("/DeleteBookID/",Delete_Books);
app.use("/InsertingBooks/",Insert_Books);
app.use("/Registration/",UserRegistration);
app.use("/Loginchk_Token_Creation/",Login);


