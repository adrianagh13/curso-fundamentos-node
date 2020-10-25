console.log(global)

let i = 0;
const intervalo = setInterval(() => {
    i++;
    if (i === 3){
        clearInterval(intervalo) //la función clearInterval recibe una función tipo setInterval para romper su intervalo
    }
    console.log('Hola'); 
}, 1000);