
const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const recipeRoutes = require('./routes/recipe.routes');
const ingredientRoutes = require('./routes/ingredient.routes');
const mealPlanRoutes = require('./routes/mealplan.routes');

const serverConfig = require('./server.config.json');
const server = new Hapi.Server(serverConfig);

const init = async () => {

    const swaggerOptions = {
        cors: true,
        deReference: false,
        info: {
            title: 'Recipecate API Documentation',
            version: '0.0.1',
        },
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    await server.start();
    console.log(`Server started at ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

// register routes
server.route([
    ...recipeRoutes,
    ...ingredientRoutes,
    ...mealPlanRoutes
]);
