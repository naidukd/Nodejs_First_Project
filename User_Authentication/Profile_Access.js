const express=require('express');
const app=express();
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const path=require("path");
app.use(express.json());
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const fromseperatetoken = require("D:\\NodeJs\\myapp\\seperate_token_verifycation.js");


const dbpath=path.join("E:\sqlite3_db","first.db");
const intialDBServer=async () => {
  try{  
db=await open({filename:dbpath,
     driver:sqlite3.Database,
    });

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

//actual query
app.get("/profile/",fromseperatetoken,async (req,res)=>

{
  
    const uname=req.u_name;
    const eid=req.e_id;
    
const sel=`select * from auth1 where username= ? AND emailid =?;`;
const final=await db.all(sel,[uname,eid]);
res.send(final);
    });


