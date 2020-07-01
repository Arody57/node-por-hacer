const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado:{
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
}


const argv = require ('yargs')
    .command('crear', 'Crear un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Elimina un registro que esta registrado en la BD', opts)
    .command('listar', 'Enlista todas las tareas con el estado true', opts.completado)
    .help()
    .argv;

module.exports={
    argv
}
