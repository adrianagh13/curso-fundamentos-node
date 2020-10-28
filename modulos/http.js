const http = require('http');

//PETICION : CLIENTE-SERVIDOR/REQUEST-RESPONSE

http.createServer((req, res) => {
    console.log('Nueva peticion');
    console.log(req.url);

    //Escribir una cabecera(se pueden visulizar en consola)
    res.writeHead(201, { 'Content-Type': 'text/plain' }) //método de cabecera, código de edo, y cabecera

    //Escribir respuesta al usuario
    res.write('hola, ya se usar http de node')

    res.end();//terminar la peticion
}).listen(3002) //el servidor escucha al puerto 3002

console.log('Escuchando al puerto 3002');

//Puedes visualizar las cabeceras en el inspector-Network-Código de estado