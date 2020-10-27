const { exec, spawn } = require('child_process');

let proceso = spawn('cmd.exe', ['/c', 'dir']);

console.log(proceso.pid);

proceso.stdout.on('data', function (dato) { //con un standard out imprimimos la data de nuestro proceso
    console.log(dato.toString()); //los convertimos a string porque spawn recibe binarios
});

proceso.on('exit', () => {
    console.log('El proceso terminó');
    console.log('Está muerto el proceso?');
    console.log(proceso.killed); //retorna un booleano para saber si se ha matado el proceso
})

//Mediante spawn podemos iniciar procesos que devuelven grandes cantidades de datos binarios
//Se debe usar spawn cuando se quieren obtener datos desde que el proceso arranca