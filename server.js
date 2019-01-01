
const Hapi = require('hapi');
const knex = require('./knex');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

const server = new Hapi.Server({
    port: 8080,
    host: 'localhost'
});

const init = async () => {

    const swaggerOptions = {
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

// #region Routes
server.route([
    {
        path: '/recipes',
        method: 'GET',
        options: {
            tags: ['api', 'recipes']
        },
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
    },
    {
        path: '/recipes/{id}',
        method: 'GET',
        options: {
            tags: ['api', 'recipes']
        },
        handler: async (request, h) => {

            const recipeId = request.params.id;

            const recipe = await knex.from('recipe')
                .select('id', 'name', 'instructions')
                .where({ 'id': recipeId })
                .first()
                .then(async recipe => {
                    recipe.ingredients = await knex('ingredient')
                        .join('recipes_ingredients', { 'ingredient.id': 'recipes_ingredients.ingredient_id' })
                        .where({ 'recipes_ingredients.recipe_id': recipeId })
                        .select('*');
                    return recipe;
                });

            if (!recipe) {
                return h.response(null).code(404);
            }

            return recipe;
        }
    }
]);

// #endregion
