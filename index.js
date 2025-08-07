const express = require('express');
const dotenv = require('dotenv');
const routerProduct = require('./src/routes/products.router.js');
const routerHome = require('./src/routes/home.router.js')
dotenv.config();


// Usamos express de la libreria express
const app = express();


// Aqui especificamos las rutas que usaremos
app.use('/products', routerProduct);
app.use('/home', routerHome);

// mostramos la vista
app.get("/", (req,res) =>{
    res.send("Hola mundo")
});

// Usamos el puerto 
const PORT = process.env.DB_PORT || 1000;

// Iniciamos el servidor y le decimos que escuche en el puerto especificado.
// Una vez el servidor está corriendo, mostramos un mensaje en la consola.
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));