const axios = require('axios');

const requestGet = (req, res) =>{
axios('https://fakestoreapi.com/products?limit=5')
.then(response =>{
    // res.send(response.data)
    // Renderizamos la vista
    res.render('products', { response: response.data })
})
.catch(error =>{
    console.error('Error en la peticion: ', error)
})

};

const requestGetById = (req,res) =>{
axios('https://api.escuelajs.co/api/v1/products/' + req.params.id)
.then(response =>{
    res.send(response.data)
})
.catch(error =>{
    console.error('Error en la peticion: ', error)
})
};

// En este caso como ejemplo, esto solo lo hace JavaScript para simplificar el codigo
// Se omite el valor de la llave, se sobreentiende que la llave es su valor
module.exports ={
    requestGet: requestGet,
    requestGetById: requestGetById

}