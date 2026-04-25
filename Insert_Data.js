const express=require('express');
const app=express();
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const path=require("path");
app.use(express.json());
const jwt=require("jsonwebtoken");
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

app.post("/pos/",fromseperatetoken,async(req,res)=>
{

const b_name=req.body.bookname;
const b_price=req.body.bookprice;


    const whole=`insert into books (book_name,price) values(?,?);`;

    const complete=await db.run(whole,[b_name,b_price]);
    const final_one=complete.lastID
    res.status(200).send(`Successfully inserted the book name is <b>${b_name}<b/> and price is <b>${b_price}</b> with last id is <b>${final_one}</b>`);
    
    
}
);
