const express=require('express');
const app=express();
app.use(express.json());
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const route=express.Router();






route.post("/",async(req,res)=>
{
  const db=req.app.set("db");
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
module.exports=route;

