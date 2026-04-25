const priceismandatory=(req,res,next)=>
{
const price=req.query.pri;
if(!price)
{
return res.status(400).send(`price field is the mandatory`);


}
req.pri=price;
next();
};
module.exports=priceismandatory;