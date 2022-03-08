// this file is for handling all the api routes like 'api/v1'
const express=require('express');
const router=express.Router();

router.use('/v1',require('./v1'));

module.exports=router;