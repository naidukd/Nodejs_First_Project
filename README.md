I have a USER_AUthentication and Router and Middleware folders 
And also i have a Index.js file which is main file
In Index.js i have called the all routers which are in Router Folder
In Middlware folders i have verified the login user is entered right password and user name or not
If user enters correctly then i have created the token that token must be provided when any one sending the request from front end to access books data in my database
As well as in middle ware i have handles the some exceptions also like price is mandatroy like that and also i have passed the variables from middle ware to routers when i have received from front end instead of taking those front end requests in routers.
For this i have use the sqlite database db name is first and tables like for user table is auth1 and books table is books this is the simple code
