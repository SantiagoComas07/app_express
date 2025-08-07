const express = require('express');
const router = express.Router();
// LLamo mi controlador
const controller = require('../controllers/home.controller.js')

// Uso mi controlador

router.get('/', controller.index);


module.exports=router