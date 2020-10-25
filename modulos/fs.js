const fs = require('fs');

//borrar un file
//Llamamos a la función unlink, la cual se encarga de hacer unlink al nodo creado de este archivo

const borrar = (ruta, cb) => {
    fs.unlink(ruta, (err, data) => {
        if(err){
            console.log('No se ha podido eliminar el file');
        }
        else {
            console.log('Borrado correctamente');
        }
    });
}

// borrar(__dirname + 'archivo1.txt', console.log)