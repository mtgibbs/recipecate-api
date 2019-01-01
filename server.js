
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

const init = async () => {
    await server.start();
    console.log(`Server started at ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
