const connectionInfo = require('./connection-info.dev.json');

module.exports = {

    development: {
        migrations: { tableName: 'knex_migrations' },
        seeds: { tableName: './seeds' },
        client: 'mysql',
        connection: connectionInfo
    }
};
