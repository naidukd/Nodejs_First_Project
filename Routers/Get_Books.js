const express=require('express');
const app=express();
app.use(express.json());
const route=express.Router();
const fromseperatetoken = require("D:\\NodeJs\\myapp\\Middlewares\\Token_Verify.js");
const printingurlandmethod = require("D:\\NodeJs\\myapp\\Middlewares\\URL_Method_Time_Print.js");
const Price_Exception_Handling = require("D:\\NodeJs\\myapp\\Middlewares\\Price_Exception.js");
const Book_Exception_Handling = require("D:\\NodeJs\\myapp\\Middlewares\\Book_Exception.js");



//actual query
route.get("/",fromseperatetoken,printingurlandmethod,Price_Exception_Handling,Book_Exception_Handling,async (req,res)=>

{
  const db=req.app.get("db");
  console.log(req.query);
   const bookname=req.query.bookname;
   const pri=req.query.pri;
    
const sel=`select * from books where book_name like ? AND price =?;`;
const final=await db.all(sel,[`%${bookname}%`,pri]);
if(final.length==0)
{
  res.send(`we did not find any matching data`)
  console.log(res);
}
else{
res.send(final);
console.log(final);
}
    });

    module.exports=route;

