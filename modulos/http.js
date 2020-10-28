const http = require('http');

//PETICION : CLIENTE-SERVIDOR/REQUEST-RESPONSE

const router = (req, res) => {
    console.log('Nueva peticion');
    console.log(req.url);

    switch(req.url){
        case'/hola':
            res.write('Hola, que tal');
            res.end();
            break;

        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
            break;
    }
}

http.createServer(router).listen(3002) //separé la función que maneja el req y res

console.log('Escuchando al puerto 3002');
