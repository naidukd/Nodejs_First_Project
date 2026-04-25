const express=require('express');
const app=express();
app.use(express.json());
const route=express.Router();
const fromseperatetoken = require("D:\\NodeJs\\myapp\\Middlewares\\Token_Verify.js");




route.post("/",fromseperatetoken,async(req,res)=>
{
const db=req.app.set("db");
const b_name=req.body.bookname;
const b_price=req.body.bookprice;


    const whole=`insert into books (book_name,price) values(?,?);`;

    const complete=await db.run(whole,[b_name,b_price]);
    const final_one=complete.lastID
    res.status(200).send(`Successfully inserted the book name is <b>${b_name}<b/> and price is <b>${b_price}</b> with last id is <b>${final_one}</b>`);
    
    
}
);
module.exports=route;
