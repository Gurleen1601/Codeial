const Post=require('../models/post')
module.exports.create=function(req,res){
    Post.create({
        content:req.body.create,
        user:req.user._id
    },function(err,post){
        if(err){
            console.log('error in creating a post');
        }
        return res.redirect('back');
    })

}