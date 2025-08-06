const express = require('express');
const router = express.Router();

const axios = require('axios');

router.get("/product", (req,res)=>{
axios('https://fakestoreapi.com/products/1')
.then(response =>{
    res.send(response.data)
})
.catch(error =>{
    console.error('Error en la peticion: ', error)
})

});


module.exports = router;