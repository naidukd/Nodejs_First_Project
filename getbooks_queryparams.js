const express=require('express');
const app=express();
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const path=require("path");
app.use(express.json());
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const fromseperatetoken = require("D:\\NodeJs\\myapp\\seperate_token_verifycation.js");
const printingurlandmethod = require("D:\\NodeJs\\myapp\\other_middleware.js");
const Price_Exception_Handling = require("D:\\NodeJs\\myapp\\pricemand.js");
const Book_Exception_Handling = require("D:\\NodeJs\\myapp\\booknamemand.js");


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
app.get("/booksss/",fromseperatetoken,printingurlandmethod,Price_Exception_Handling,Book_Exception_Handling,async (req,res)=>

{
  console.log(req.query);
  
   const b=req.boo;
    const p=req.pri;
    
const sel=`select * from books where book_name like ? AND price =?;`;
const final=await db.all(sel,[`%${b}%`,p]);
if(final.length==0)
{
  res.send(`we did not find any matc
    hing data`)
  console.log(res);
}
else{
res.send(final);
console.log(final);
}
    });


