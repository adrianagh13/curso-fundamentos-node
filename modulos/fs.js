const fs = require('fs');


//LECTURA
const read = (route, callback) => {
    fs.readFile(route, (err, data) => {
        if(err){
            console.log('something went wrong');
        }
        else{
            callback(data.toString());
        }
    })
}

read(__dirname + '/archivo.txt', console.log);

//ESCRITURA

const write = (route, content, callback) => {
    fs.writeFile(route, content, (err, data) => {
        if(err){
            console.error('something went wrong')
        }
        else{
            console.log('succesfully writen in file');
        }
    })
}

write(__dirname + '/archivo.txt', 'I just wrote in the file')