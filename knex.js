const connectionInfo = require('./connection-info.dev.json');

export default require('knex')({
    client: 'pg',
    connection: connectionInfo
});
