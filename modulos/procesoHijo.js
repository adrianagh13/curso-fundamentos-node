const { exec } = require('child_process');

exec('node modulos/consola.js ', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
})

//Ejemplo en que un proceso hijo ejecuta un proceso de node por debajo
//Con exec podemos ejecutar procesos sencillos por debajo del proceso hijo