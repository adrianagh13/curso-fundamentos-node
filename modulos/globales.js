setImmediate(() => {
    console.log('Hola');
})

//Esta función es equivalente a setTimeout pero en tiempo 0

// console.log(process); //retorna toda la información de los procesos en ejecución

console.log(__dirname); //retorna la dirección en la que está nuestro archivo
console.log(__filename); //retorna la dirección de nuestro archivo incluyendo el filename