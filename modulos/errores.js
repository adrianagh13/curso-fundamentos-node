
const seRompeAsincrona = (cb) => {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.error('Hubo un error en la función asíncrona');
            cb(error);
        }
    }, 3000)
}

try {
    seRompeAsincrona((error) => {
        console.log(error)
    }); 
} catch (error) {
    console.log('Ha sucedido un error');
    console.error(error.message);
    console.log('Pero no pasa nada, lo hemos capturado')
}

console.log('Fin del proceso');

//TRY CATCH nos permite manejar errores sin romper con el flujo normal de nuestro programa
//Nos permite gestionar errores
