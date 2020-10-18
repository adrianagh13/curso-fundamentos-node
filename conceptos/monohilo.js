//¿Cómo funciona node?
//Nuestro código se ejecuta y se convierte a código máquina, se imprime el "hola mundo", y cada segundo el event loop 
//disparará un evento que es imprimir el "cada segundo me ejecuto" 

console.log('primera instruccion');

setInterval( () => {
    console.log('cada segundo me ejecuto wuuu');
}, 1000);

console.log('segunda instrucción');

//¿Qué sucede cuando tenemos un error?
let i = 0;
setInterval( () => {
    console.log(i);
    i++;
    if(i == 5) {
        console.log('forzamos error');
        var a = 3 +z;
    }
}, 1000);
//Es importante estar pendiente a posibles errores que puedan cortar la ejecución

//ASINCRONÍA: Se pueden correr varios procesos a la vez, a diferencia de otros lenguajes que corren de 1 en 1 proceso
//Siguiendo la jerarquía de este código, primero se imprimirán los console.log, y a la par los eventos de setInterval cada segundo, sin importar el orden en el que estén escritos.
//De esto se trata el monohilo de entradas y salidas asíncronas, y el event loop que constamente está corriendo en bucles