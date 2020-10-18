const soyAsync = miCallback => {
    console.log('Hola, soy una función asíncrona');
    setTimeout(() => {
        console.log('Estoy siendo asíncrona');
        miCallback()
    }, 1000)
}

console.log('Iniciando proceso');
soyAsync(() => {
    console.log('Terminando proceso');
});


