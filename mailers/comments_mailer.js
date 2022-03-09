const nodeMailer = require('../config/nodemailer');

// this is another way of exporting a method
exports.newComment = (comment) => {
    let htmlString=nodeMailer.renderTemplate({comment:comment},'/comments/new_comments.ejs');

    nodeMailer.transporter.sendMail({
        from:'gurleen0790.cse19@chitkara.edu.in',
        to:comment.user.email,
        subject:"New Comment PUblished",
        html:htmlString
    },(err,info)=>{
        if(err){
            console.log('Error in sending email',err);
            return;
        }
        console.log('Message sent',info);
        return;
    });
}