const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
// used for session cookie
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const passportJWT=require('./config/passport_jwt_strategy');
const passportGoogle=require('./config/passport-google-oauth2-strategy');
const MongoStore=require('connect-mongo')(session);
const sassMiddleware=require('node-sass-middleware');
const flash=require('connect-flash');
const customMare=require('./config/middleware');

app.use(sassMiddleware({
   src:'./assets/scss',
   dest:'./assets/css',
   debug:true,
   outputStyle:'extended',
   prefix:'/css'
}));
app.use(express.urlencoded());

app.use(cookieParser());  

// using static files
app.use(express.static('./assets'));

// make the uploads path available to the browser
app.use('/uploads',express.static(__dirname + '/uploads'));

// using express layouts
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);

// set up the views engine
app.set('view engine','ejs');
app.set('views','./views');

// mongo store is used to store the session cookie in the db
app.use(session({
    name:'Codeial',
    // todo change the secret before deployment in production mode
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection:db,
            autoRemove:'disabled'
        },function(err){
            if(err){
                console.log(err || 'connect-mongodb setup ok');
            }
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMare.setFlash);

// use express router
app.use('/',require('./routes'));


app.listen(port,function(err){
   if(err){
       console.log(`Error in running the server: ${err}`);
   }  
   console.log(`Server is running on port: ${port}`);
});