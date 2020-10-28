const os = require('os');

//El módulo OS permite acceder a métodos y propiedades de bajo nivel que resultan muy útiles

console.log(os.arch()); //devuelve la arquitectura de la computadora-64bits
console.log(os.platform()); //da la información sobre la plataforma en la que se corre el código

console.log(os.cpus()); //información de las cpus o núcleos del equipo, los cores que tiene, la velocidad
console.log(os.cpus().length); //devuelve el número de cores o núcleos del procesador

console.log(os.constants); //retorna todos los errores y señales del sistema, con su nivel de prioridad

//ESPACIO EN MEMORIA

const SIZE = 1024; //1024 bytes son un kilobyte
const kb = bytes => { return bytes / SIZE }
const mb = bytes => { return kb(bytes) / SIZE }
const gb = bytes => { return mb(bytes) / SIZE }

// console.log('Memoria libre');
console.log(os.freemem()); //retorna en bytes la memoria libre o restante que tenemos
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

// console.log('Total de memoria');
console.log(os.totalmem()); //retorna en bytes la memoria total que tenemos
console.log(kb(os.totalmem()));
console.log(mb(os.totalmem()));
console.log(gb(os.totalmem()));

console.log(os.homedir()); //devuelve el directorio home
console.log(os.hostname()); //nombre de la maquina