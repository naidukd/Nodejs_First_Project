const express=require('express');
const app=express();
app.use(express.json());
const route=express.Router();
const fromseperatetoken = require("D:\\NodeJs\\myapp\\Middlewares\\Token_Verify.js");



route.delete("/:did/",fromseperatetoken,async(req,res)=>
{
  const db=req.app.set("db")
const {did}=req.params;//or you Can access like const deleteid=req.params.did then you can pass deleteid


    const sel=`select * from books where book_d=?;`;
    const SelResult=await db.get(sel,[did]);
    if(!SelResult)
    {
return res.status(400).send(`Sorry there is no data on this ${did}`);

    }
    else {
    const whole=`delete from books where book_d=?;`;
    await db.run(whole,[did]);
    res.send(`deleted successfully of ${did} ID `);
    console.log(`${did}`)
    } 
    
}
);
module.exports=route;
