const hola = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hola' , nombre);
            resolve(nombre)
        }, 1500)
    })
}

const hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla bla');
            resolve(nombre);
        }, 1000)
    })
}

const adios = (nombre) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios', nombre);
            resolve();
        }, 1000)
    });
}

const main = async () => {
    let nombre = await hola('Adri');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre); //Una manera diferente de pasar parámetros, es guardando el resultado de hola, con el parámetro nombre, en una variable let
}
 

console.log('Comenzamos proceso');
main()
console.log('Esta será la segunda instrucción');