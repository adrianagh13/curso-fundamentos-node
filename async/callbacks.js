const hola = (nombre, miCallback) => {
    setTimeout(() => {
        console.log('Hola' , nombre);
        miCallback(nombre)
    }, 1500)
}

const adios = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000)
}

console.log('Iniciando proceso');

hola('Adri', (nombre) => {
    adios(nombre, () => {
        console.log('Terminando proceso');
    })
})

//Asincronia con callbacks
//Se llama al log de inicio, posterior el 'hola, soy una funcion asincrona, y como lo indica el setTimeout
//1 segundo despupes se lanzara el 'estoy siendo asincrona', asi como el callback que indicamos 'terminando proceso'

