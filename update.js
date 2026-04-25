const express=require('express');
const app=express();
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const path=require("path");
app.use(express.json());


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

app.put("/modi/:dnis/",async(req,res)=>
{
 
const {dnis}=req.params;
const bookdetails=req.body
const title=bookdetails.books_name;
const book_price=bookdetails.price



    const whole=`update books set book_name=?, price=? WHERE book_d=?;`;
    await db.run(whole,[title,book_price,dnis]);
    res.send("Modified succefully");
    
    
}
);
