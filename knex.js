const connectionInfo = require('./connection-info.dev.json');

module.exports = require('knex')({
    client: 'mysql',
    connection: connectionInfo
});
