const hola = (nombre, miCallback) => {
    setTimeout(() => {
        console.log('Hola' , nombre);
        miCallback(nombre)
    }, 1500)
}

const hablar = (callbackHablar) => {
    setTimeout(() => {
        console.log('bla bla bla bla');
        callbackHablar();
    }, 1000)
}

const adios = (nombre, otroCallback) => {
    setTimeout(() => {
        console.log('Adios', nombre);
        otroCallback();
    }, 1000)
}

console.log('Iniciando proceso');

hola('Adri', (nombre) => {
    hablar(() => {
        hablar(() => {
            hablar(() => {
                adios(nombre, () => {
                    console.log('Terminando proceso');
                })
            })
        })
    })
})