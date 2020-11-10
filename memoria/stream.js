//LECTURA  Y LECTURA DE STREAMS
const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data ='';

let readableStream = fs.createReadStream(__dirname + '/input.txt'); //readableStream es la instancia de createReadStrem del fileSystem

readableStream.setEncoding('utf-8'); //UTF-8 es el encoding internacional para escribir con caracteres del alfabeto americano

readableStream.on('data', (chunk) => { 
    data += chunk; //vamos añadiendo piezas de información a data
});

readableStream.on('end', () => { //aquí sabemos cuando termina el proceso 
    // console.log(data); //y hasta que termina se imprime esa data
})

//Es conveniente hacer esto en casos donde se tengan archivos muy grandes
//Es mejor mandar la información en "chunks" pequeños

//ESCRITURA DE STREAMS

//stdout ---> buffer de escritura
//Escritura en el buffer de salida del sistema
// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');

const Transform = stream.Transform;

function Mayus(){
    Transform.call(this) //Recuerda que no puedes usar this en arrow function, call llama al método de transform
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase(); //convierte cada chunk a string y lo pasa a upper case
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus) //pipe, actúa como una pipa, manda información de un sitio a otro.
    .pipe(process.stdout);
