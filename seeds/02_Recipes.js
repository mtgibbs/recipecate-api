
exports.seed = async (knex, Promise) => {

  await knex('recipes_ingredients').del();
  await knex('recipe').del();
  await knex('recipe').insert([
    { id: 1, name: 'Hot Cocoa', instructions: 'TODO FILL THESE IN' },
    { id: 2, name: 'Chocolate Chip Cookies', instructions: 'TODO FILL THESE IN' }
  ]);

  return await knex.raw('SELECT setval(\'recipe_id_seq\', (SELECT MAX(id) from recipe));');

};
