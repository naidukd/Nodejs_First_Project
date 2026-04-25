const express=require('express');
const app=express();
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const path=require("path");
app.use(express.json());
const bcrypt=require("bcrypt");
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


app.post(/booklogin/,async(req,res)=>
{
const {user_name,pwd}=req.body;
const sel=`select * from auth1 where username=?`;
const final=await db.get(sel,[user_name]);

if(final==undefined){

    res.send(`you enetered ${user_name} this is wrong please enter correct USER ID`);

}
const com=await bcrypt.compare(pwd,final.password);
if (com!=true)
{
res.send(`You entered correct User ID but entered ${pwd} is wrong password.Please enter correct password `);

}
else
{
 const payload={
    us:final.username,
    uk:final.emailid
}
 
 const jwtToken=jwt.sign(payload,"abcdefgh",{expiresIn:"365d"});
  res.send(jwtToken);
  console.log(payload);

}

}
);

