const express=require('express');
const app=express();
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const path=require("path");


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

app.get("/book/:bookid/",async(req,res)=>
{
const {bookid}=req.params;
    const whole=`select * from books where book_d=?;`;

    const complete=await db.get(whole,[bookid]);
    if (!complete) {
  res.status(404).send("Book not found");
} else {
  res.send(complete);
}

    
}
);


