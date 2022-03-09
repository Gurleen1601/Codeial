const nodemailer=require('nodemailer');
const ejs=require('ejs');
const path=require('path');

// transporter is an object which will be assigned to the nodemailer
let transporter=nodemailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'gurleenkaur455@gmail.com',
        password:'I1LUV2MY3family4'
    }
});

// tells mailer that we are using ejs
let renderTemplate=(data,relativPath) => {
    let mailHTML;
    ejs.renderFile(
           path.join(__dirname,'../views/mailers',relativPath),
           data,
           function(err,template){
               if(err){
                   console.log('Error in rendring template',err);
                   return;
               }
               mailHTML=template;
           }
    )
    return mailHTML;
}

module.exports={
    transporter:transporter,
    renderTemplate:renderTemplate
}