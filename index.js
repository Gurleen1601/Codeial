const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');

app.use(express.urlencoded());

app.use(cookieParser());  

// using static files
app.use(express.static('./assets'));

// using express layouts
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);

// use express router
app.use('/',require('./routes'));

// set up the views engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
   if(err){
       console.log(`Error in running the server: ${err}`);
   }  
   console.log(`Server is running on port: ${port}`);
});