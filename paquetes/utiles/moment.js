const moment = require('moment'); //este modulo nos permite trabajar con fechas

let ahora = moment(); //permite adquirir la fecha de hoy

console.log(ahora.toString()); //imprime la fecha de hoy

console.log(ahora.format('YYY/MM/DD - HH:mm')); //.format nos permite establecer un formato para la fecha