const descripcion = { 
        alias: 'd',
        demand: true
}

const completado = {
        alias: 'c',
        demand: true
}

const argv = require('yargs')
.command('crear', 'Crear un elemento por hacer', {
    descripcion
} )
.command('actualizar', 'Actualizar estado completo de una tarea', {
    descripcion,
    completado
})
.command('borrar', 'borrar una tarea', {
    descripcion
})
.help()
.argv;

module.exports = {
    argv
}
