const asincrona = (callback) => {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
            callback(error);
        }
    })
}


asincrona((err, dato) => {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
        // throw err;
    }

    console.log('Todo va bien, la data es: ', dato); //tambien se puede concatenar con , 
});


//ERROR FIRST CALLBACKS --> Se utilizan para pasar primero el error y los datos posteriormente
//Entonces se puede verificar el primer argumento que es el error, para manejarlo si es que hubiera
//En caso de que no haya ningun error se pueden utilizar los argumentos siguientes y seguir adelante