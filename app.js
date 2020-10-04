const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors')


let comand = argv._[0];

switch (comand) {
    case 'create':
        let task = toDo.create(argv.description)
        console.log(task);
        break;
    case 'list':

        let list = toDo.getList();

        for (let task of list) {
            console.log('=========Por hacer========='.green);
            console.log(task.description);
            console.log('Estado: ' + task.completed);
            console.log('==========================='.green);
        }
        break;
    case 'update':

        let updated = toDo.update(argv.description, argv.completed);
        console.log(updated);

        break;

    case 'delete':
        let deleted = toDo.deleteTask(argv.description);
        console.log(deleted);

        break;

    default:
        console.log('Comando no válido');
        break;
}