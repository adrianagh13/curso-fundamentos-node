const seRompe = () => {
    return a + 3;
}

try {
    seRompe(); 
} catch (error) {
    console.log('Ha sucedido un error');
    console.error(error);
    console.log('Pero no pasa nada, lo hemos capturado')
}

console.log('Fin del proceso');

//TRY CATCH nos permite manejar errores sin romper con el flujo normal de nuestro programa
//Nos permite gestionar errores
