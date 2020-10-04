const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
};
const completed = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente una tarea'
};

const argv = require('yargs')
    .command('create', 'Crea un elmento por hacer', {
        description
    })
    .command('update', 'Actualiza el estado de una tarea', {
        description,
        completed
    })
    .command('delete', 'Elimina una tarea', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}