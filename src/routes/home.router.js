const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/home', (req,res)=>{
    res.send("Bienvenido a home");
});


module.exports=router