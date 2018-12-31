
const Hapi = require('hapi');
const knex = require('./knex');

const server = new Hapi.Server({
    port: 8080,
    host: 'localhost'
});

server.route({
    path: '/recipes',
    method: 'GET',
    handler: async (request, h) => {
        const results = await knex.from('recipe').select('id', 'name');
        if (!results || results.length === 0) {
            return {
                count: 0,
                data: []
            };
        }
        return {
            count: results.length,
            data: results
        };
    }
});

const init = async () => {
    await server.start();
    console.log(`Server started at ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
