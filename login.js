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


app.post(/booklogin/,async(req,res)=>
{
const {user_name,pwd}=req.body;
const sel=`select * from auth1 where username=?`;
const final=await db.get(sel,[user_name]);

if(final==undefined){

    res.send(`invalid user for this ${user_name}`);

}
const com=await bcrypt.compare(pwd,final.password);
if (com!=true)
{
res.send(`invalid password for this ${pwd}`);

}
else
{
    res.send(`login successfully for this ${user_name} and ${pwd} and ${final.emailid}`);
}

});