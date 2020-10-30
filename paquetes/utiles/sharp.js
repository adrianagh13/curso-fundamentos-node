const sharp = require('sharp'); //este modulo nos permite trabajar con imagenes

sharp('colibri.jpg') //insertamos el nombre de la imagen
    .resize(80) //cambiamos el tamaño
    .grayscale() //cambia la tonalidad a bn
    .toFile('resized.png'); //con este cambio establecemos un nuevo nombre