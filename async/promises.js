const hola = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola' , nombre);
            resolve(nombre)
        }, 1500)
    })
}

const hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla bla');
            resolve(nombre);
        }, 1000)
    })
}

const adios = (nombre) => { //Ya no recibe callbacks, devuelve promesas
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve();
        }, 1000)
    });
}

console.log('Iniciamos proceso');
hola('Adri')
    .then(hablar) //identifica automáticamente el parámetro nombre sin necesidad de indicarlo
    .then(nombre => {
        return adios(nombre);
    })
    .then(nombre => {
        console.log('Terminamos proceso');
    })

//VENTAJAS DE LAS PROMESAS
//Podemos ir anidándolas