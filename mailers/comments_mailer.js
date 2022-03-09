const nodemailer = require('../config/nodemailer');

// this is another way of exporting a method
exports.newComment = (comment) => {
    console.log('inside newComment mailer');

    nodemailer.transporter.sendMail({
        from:'gurleen0790.cse19@chitkara.edu.in',
        to:comment.user.email,
        subject:"New Comment PUblished",
        html:'<h1> Yup, your comment is now published!</h1>'
    },(err,info)=>{
        if(err){
            console.log('Error in sending email',err);
            return;
        }
        console.log('Message sent',info);
        return;
    });
}