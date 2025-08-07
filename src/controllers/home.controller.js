const path = require('path');


const index = (req,res)=>{
    res.sendFile(path.resolve(__dirname,("../../private/index.html")));
    console.log("__dirname: ",__dirname)
    console.log("__dirname con path.resolve: ",path.resolve(__dirname,("../../private/index.html")));
};

// De esta forma exporto la funcion index
module.exports ={
    index: index,
}
