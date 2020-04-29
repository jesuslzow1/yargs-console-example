const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(argv)

let comando = argv._[0]

switch(comando){
    case 'listar':
        console.log(`Tabla de ${ argv.base }`.green)
        listarTabla(argv.base, argv.limite)
            .then(table_lista => console.log(table_lista))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log(`Tabla de ${ argv.base }`.red)
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.red))
            .catch(e => console.log(`El valor instroducido ${ argv.base } no es un numero`));
        break;
    default:
        console.log('Commando no reconocido')
}




// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
