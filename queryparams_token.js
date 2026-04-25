

const express=require('express');
const app=express();
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const path=require("path");
app.use(express.json());
const jwt=require("jsonwebtoken");


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
app.get("/booksssss/", async (req,res)=>
{
   
    const headeraccess=req.headers.authorization;// here we can write const headeaccess=req.headers[authorization] or const {authorization}=req.authorization which means both variabels are same.
   
        let splitting;
         if(headeraccess!=undefined)
        {
              splitting=headeraccess.split(" ")[1];
        }
    if(!splitting)// which means splitting==undefined||splitting==null||splitting==""
    {
        res.status(400);
        res.send(`unauthorized user`)
    }    
  else
  {
    try{
    const verification=jwt.verify(splitting,"abcdefgh");

  const {pri}=req.query;
    
const sel=`select * from books where price =?;`;
const final=await db.all(sel,[pri]);
res.send(final);
    }
    catch(error){
        res.status(400).send("unauthorized");

    }
    }

});