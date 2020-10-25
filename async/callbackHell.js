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

const conversacion = (nombre, veces, callback) => {
    if(veces > 0){
        hablar(() => {
            conversacion(nombre, --veces, callback) //Aplicamos una funcion recursiva, la llamamos para que se ejecute la cantidad de veces que indiquemos
        }) //cada que se ejecute conversación, a las veces se le retará 1, por ello aplicamos las condiciones
    } else { //cuando sea igual a 0, ejecutamos adios, y recibe como callback un console log
        adios(nombre, callback);
    }
}

console.log('Iniciando proceso');

hola('Adri', (nombre) => {
   conversacion(nombre, 3, () => {
       console.log('Terminamos proceso');
   });
});

// hola('Adri', (nombre) => {
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 adios(nombre, () => {
//                     console.log('Terminando proceso');
//                 })
//             })
//         })
//     })
// })

//Con funciones más legibles y con más lógica y complejidad, podemos evitar el callback hell