// this file is for handling all the routes for a particular version like 'api/v1/post'
const express=require('express');
const router=express.Router();

router.use('/posts',require('./posts'));

module.exports=router;