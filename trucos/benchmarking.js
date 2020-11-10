//console.time y console.timeEnd nos permiten medir cuanto tiempo dura un proceso

console.time('programa')
let suma = 0;
console.time('bucle')
for (let i = 0; i < 10000000; i++){
    suma += 1; 
}
console.timeEnd('bucle')

let suma2 = 0;
console.time('bucle2');
for (let i = 0; i < 10000000; i++){
    suma2 += 1; 
}

console.time('asincrono');
console.log('Empieza el proceso asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    })

console.timeEnd('bucle2')
console.timeEnd('programa')

function asincrona(){
    return new Promise( (resolve) => {
        setTimeout(() => {
            console.log('El proceso ha terminado');
            resolve();
        })
    })
}


//Así podemos comprender cuánto tiempo tarda un proceso en ejecutarse, podemos establecer un berchmarking(evaluación)