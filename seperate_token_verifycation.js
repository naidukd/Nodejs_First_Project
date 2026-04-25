const express=require('express');
const app=express();
app.use(express.json());
const jwt=require("jsonwebtoken");



const TokenVerify=(req,res,next)=>
{

  const headeraccess=req.headers.authorization;
  
  if(headeraccess==undefined)
  {
res.status(400).send(`Un authorized user`);

  }
    let finalToken;
    if(headeraccess!=undefined)
    {
    finalToken=headeraccess.split(" ")[1];

    }
    else{

      res.send(`not proper splitting`)
    }
const verification=jwt.verify(finalToken,"abcdefgh",(error,frompayloadobj)=>//here jwt.verify reads the finaltoken which is in combination of hader(algoritham)+paylaod(user information)+signature(our scecret key) after decoded gives the paylaod value whihc i stores in this varriable (frompayloadobj)
{
if(error)
{

  res.status(400).send(`token is wrong`);
}
else{
  const a=frompayloadobj.us
  const b=frompayloadobj.uk
  req.u_name=a;//pusing values to already existing object which is (req)
  req.e_id=b;
  next();
}


});

    

};


module.exports = TokenVerify;
