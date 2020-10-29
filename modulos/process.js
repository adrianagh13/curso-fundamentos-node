// const process = require('process'); No hay necesidad de requerir el modulo process, porque es un objeto global

//El objeto PROCESS nos permite escuchar eventos de node

process.on('beforeExit', () => { //con on, detecta un evento, en este caso el before al exit del programa
    console.log('El proceso va a terminar');
})

process.on('exit', () => { //con on, detecta un evento, en este caso el exit del programa, se ejecuta cuando node detiene el event loop y cierra su proceso
    console.log('El proceso ha acabado');
    setTimeout(() => {
        console.log('Esto no se verá nunca porque el proceso hizo exit');
    }, 1000);
})

process.on('uncaughtException', (err, origen) => { //este evento detecta errores que no hemos manejado
    console.error('Se nos ha olvidado capturar un error');
    console.error(err);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones no menjadas');
    }, 1000)
})

funcionQueNoExiste() //forzamos un error llamando a una función que no existe

console.log('Si el error no se maneja, no se mostrará esto en consola');