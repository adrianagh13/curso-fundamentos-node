const bcrypt = require('bcrypt'); //el modulo bcrypt, encripta textos

const password = '1234contra';

bcrypt.hash(password, 5, (err, hash) => {  //convierte nuestro texto a hash
    console.log(hash);

    bcrypt.compare(password, hash, (err, res) => { //comparamos si el texto es equivalente al hash
        console.log(res);
    })
})