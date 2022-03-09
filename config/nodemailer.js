const nodeMailer=require('nodemailer');
const ejs=require('ejs');
const path=require('path');

// transporter(the person who sends the mails) is an object which will be assigned to the nodemailer
let transporter=nodeMailer.createTransport({
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'gurleen0790.cse19@chitkara.edu.in',
        pass:'Gks16012001!!'
    }
});

// tells mailer that we are using ejs
let renderTemplate=(data,relativePath) => {
    let mailHTML;
    ejs.renderFile(
           path.join(__dirname,'../views/mailers',relativePath),
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