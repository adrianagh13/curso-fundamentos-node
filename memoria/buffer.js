//BUFFERS
//Datos en binario en forma de secuencia de bytes que se trasladan de un lado a otro, provienen de los streams, se representan en hexadecimal

// let buffer = Buffer.alloc(2);//En caso de almacenar un dato, se imprimirá un 00, representa 1 byte en memoria, esta expresado en hexadecimal
// let buffer = Buffer.from([1, 2, 3]); //Representan espacios en memoria
// let buffer = Buffer.from('Hola');
//console.log(buffer.toString()); //debemos de convertir a String para que sea legible

// console.log(buffer);

//--

let abc = Buffer.alloc(26); //buffer con 27 espacios, 27 digitos binarios vacios que se muestran como hexadecimal
console.log(abc);

for(let i = 0; i < 26; i++){
    abc[i] = i + 97; //97 pertenece a la letra a, le sumamos i para que incremente el código ASCII a b,c ..
}

console.log(abc); //abecedario en hexadecimal
console.log(abc.toString()); //abecedario en caracteres

//Podemos trabajar dato a dato del buffer para trabajar cualquier tipo de transformación