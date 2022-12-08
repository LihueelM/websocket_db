const configuracion = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '',
        database: 'streetweardb'
    }
}

const knex = require("knex")(configuracion)

knex.schema.createTable('mensajes', table => {
    table.string('id')
    table.datetime('create_time')
    table.string('autor')
    table.string('texto')
 }) 
    .then(()=> console.log("table created"))
    .catch((err) => {console.log(err); throw err})
    .finally(()=> {
        knex.destroy();
    })










