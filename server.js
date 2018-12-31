
const Hapi = require('hapi');
const knex = require('./knex');

const server = new Hapi.Server({
    port: 8080,
    host: 'localhost'
});


// Recipe Routes
server.route([
    {
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
    },
    {
        path: '/recipes/{id}',
        method: 'GET',
        handler: async (request, h) => {

            const recipeId = request.params.id;

            const result = await
                knex('recipe')
                    .join('recipes_ingredients', { 'recipe.id': 'recipes_ingredients.recipe_id' })
                    .join('ingredient', { 'ingredient.id': 'recipes_ingredients.ingredient_id' })
                    .where({ 'recipe.id': recipeId })
                    .select('*');

            if (!result || result.length === 0) {
                return h.response(null).code(404);
            }

            return result[0];
        }
    }
]);

const init = async () => {
    await server.start();
    console.log(`Server started at ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
