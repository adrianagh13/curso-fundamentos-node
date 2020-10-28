const http = require('http');

//PETICION : CLIENTE-SERVIDOR/REQUEST-RESPONSE

http.createServer((req, res) => {
    console.log('Nueva peticion');
    console.log(req.url);
    
    res.end();//terminar la peticion
}).listen(3002) //el servidor escucha al puerto 3002

console.log('Escuchando al puerto 3002');