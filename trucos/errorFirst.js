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

try {
    asincrona((err, dato) => {
        if (err) {
            // console.error('Tenemos un error');
            // console.error(err);
            // return false;
            throw err;
        }
    
        console.log('Todo va bien, la data es: ', dato); //tambien se puede concatenar con , 
    });
} catch (error) {
    console.error('Hemos capturado un error')   
    console.error(error)
}