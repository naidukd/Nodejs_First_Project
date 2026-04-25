const express=require('express');
const app=express();
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const path=require("path");
app.use(express.json());
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

app.delete("/del/:did/",fromseperatetoken,async(req,res)=>
{
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
