const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

const comando = argv._[0];

switch(comando) {
    case 'listar':
        let listado = porHacer.getListado();
        for( let tarea of listado) {
            console.log('======por hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado );
            console.log('=====================\n'.green);

        }
    break;
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
    break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
    break;

    default:
        console.log('Comando no reconocido');
    break;

}