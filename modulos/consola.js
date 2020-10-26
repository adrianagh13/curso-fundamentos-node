//TIME, mide el tiempo de ejecución de un programa hasta el console.timeEnd
console.time()
//LOG
console.log('Hola, me imprimo con .log');
//INFO
console.info('Hola, me imprimo con .info');
//ERROR
console.error('Hola, me imprimo con .error');
//WARN
console.warn('Hola, me imprimo con .warn')
//TABLE
const tabla = [
    {
        a: 1,
        b: 'X'
    },
    {
        a: 2,
        b: 'Y'
    },
]
console.table(tabla) //Imprime un objeto a manera de tabla
//GROUP
console.group('Conversacion'); //Los console.group y console.groupEnd, permiten agrupar logs mediante identacion
console.log('Hola, me llamo Adriana');
console.group('bla');
console.log('blablabla');
console.log('blablabla');
console.log('blablabla');
console.groupEnd('bla');
console.log('Hasta luego');
console.groupEnd('Conversacion');

const func = () => {
    console.group('Función 1')
    console.log('Este es el cuerpo de la función');
    console.groupEnd('Función 1')
};

func();

//COUNT Y RESETCOUNT, inicia un contador autoincremental, y reinicia el contador a 0
console.count('veces') //1
console.count('veces') //2
console.count('veces') //3
console.countReset('veces') //0
console.count('veces') //1

console.timeEnd()

//CLEAR
console.clear(); //Limpia la consola de ejecución
