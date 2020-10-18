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

//Asincronia con callbacks
//Se llama al log de inicio, posterior el 'hola, soy una funcion asincrona, y como lo indica el setTimeout
//1 segundo despupes se lanzara el 'estoy siendo asincrona', asi como el callback que indicamos 'terminando proceso'

