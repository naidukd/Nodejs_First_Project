const booknameismandatory=(req,res,next)=>
{
const book_name=req.query.bookname;
if(book_name==undefined)
{
return res.status(400).send(`BookName parameter is required`);

}
req.boo=book_name;
next();
};
module.exports=booknameismandatory;