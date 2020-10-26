const { exec } = require('child_process');

exec('dir', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
})

//Ejemplo sencillo de un child process en el cual listamos los directorios con dir