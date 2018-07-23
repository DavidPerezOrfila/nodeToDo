const opciones = {
    descripcion: {
        demand: true,
        descripcion: 'Describe una tarea por realizar',
        alias: 'd'
    },
    completado: {
        alias: 'c',
        actualizar: 'Actualiza una tarea',
        descripcion: 'Muestra una tarea como completada',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'crea una tarea para realizar', opciones)
    .command('actualizar', 'actualiza una tarea', opciones)
    .command('borrar', 'borra una tarea', opciones)
    .help()
    .argv;

module.exports = {
    argv
}