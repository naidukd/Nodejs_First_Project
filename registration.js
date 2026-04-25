

const express=require('express');
const app=express();
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const path=require("path");
app.use(express.json());
const bcrypt=require("bcrypt");



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
app.post(/bookreg/, async (req,res)=>
{
    const {user_name,pwd,eid}=req.body;
    const Roundsalt=5;
    const encrypted=await bcrypt.hash(pwd,Roundsalt);
    const sel=`select * from auth1 where username=?;`;
    const selchk=await db.get(sel,[user_name]);
    const ema=`select * from auth1 where emailid=?;`;
     const em=await db.get(ema,[eid]);
    if(selchk!=undefined)
    {
      res.status(400);
        res.send(`This ${selchk.username} is alredady exist please try again with different user name` ); 
   
  }
  if(em!=undefined){
res.status(400);
        res.send(`this ${em.emailid} is already exist please try with different email id` ); 

  }
    else{
       
const adding= `INSERT INTO auth1 (username,password,emailid) values (?,?,?);`;
const final=await db.run(adding,[user_name,encrypted,eid]);
const lid=final.lastID;
res.send(`created succesfuly with new id is  ${lid} and user name is ${user_name} and emailid is ${eid} and password is ${encrypted}`);


    }
    


});