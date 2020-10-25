const fs = require('fs');

const escribir = (ruta, contenido, cb) => {
    fs.writeFile(ruta, contenido, (err, data) => {
        if(err){
            console.error('No se ha podido escribir en el archivo')
        }
        else {
            console.log('Se escribió correctamente');
        }
    })
}

escribir(__dirname + '/archivo.txt', 'Hemos escrito en el file',  console.log);