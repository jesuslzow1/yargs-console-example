const colors = require('colors');

//requires
const fs = require('fs'); //archivosde la documentacion de node

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject('No es un numero')
            return;
        }
        let data = '';
        for (let i = 1; i <= limite ; i++){
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }
        resolve(data)
    })
}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject('No es un numero')
            return;
        }
        let data = '';
        for (let i = 1; i <= limite ; i++){
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }
        
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
          if (err) reject(err);
          else resolve(`tabla-${ base }.txt`);
        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}