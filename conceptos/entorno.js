let nombre = process.env.NOMBRE || 'sin nombre'; //Si no definimos ningun valor en la variable directamente en consola, arrojará 'sin nombre' por el operador OR
let web = process.env.WEB || 'no hay web';//Las variables de entorno que vienen de fuera se escriben en mayúsculas(viene desde hace tiempo, por ejemplo en Linux)

console.log('Hola' + nombre);
console.log('Mi sitio web es: ' + web);

//VARIABLES DE ENTORNO: Son una forma que tenemos de llamar información de afuera de nuestro software,
// process: nos da información sobre el proceso que está ejecutando este script
// env: nos da acceso a las variables de entorno

//Para definirla en la terminal de powershell escribimos lo siguiente: $env.NOMBRE='Adriana'
//Posteriormente corremos el documento con node