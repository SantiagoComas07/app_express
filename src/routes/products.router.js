const express = require('express');
const router = express.Router();
const axios = require('axios');
const reqGet = require('../controllers/product.controller.js')

router.get("/", reqGet.requestGet);

// RUTAS DINAMICAS

// Este es una ruta dinamica, le dices a express que :id es tu parte dinamica
// Luego lo agregas en la peticion axios o fetch, para ello accedes a req.params
// Un objeto que contiene todas las variables de rutas capturadas
router.get("/:id", reqGet.requestGetById);



module.exports = router;