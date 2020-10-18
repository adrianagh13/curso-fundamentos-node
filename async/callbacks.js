const soyAsync = () => {
    console.log('hola, soy una función asíncrona');
    setTimeout(() => {
        console.log('Estoy siendo asíncrona');
    }, 1000)
}

console.log('Iniciando proceso');
soyAsync();
console.log('Terminando proceso');
//La jerarquía de los logs no importa al momento de ejecución debido a que se presenta de forma asincrónica
//Se imprime el log de inicio, luego el de la fn asíncrona, después el de fin, y cuando pase el segundo se imprime el log de 'estoy siendo asíncrona'

