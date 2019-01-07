
exports.seed = async (knex, Promise) => {

  await knex('recipes_ingredients').del();

  return await knex('recipes_ingredients').insert([

    // Hot Cocoa
    { id: 1, recipe_id: 1, ingredient_id: 5, amount: 1, unit_of_measurement: 'cup' },
    { id: 2, recipe_id: 1, ingredient_id: 4, amount: 1.5, unit_of_measurement: 'cup' },
    { id: 3, recipe_id: 1, ingredient_id: 6, amount: 1, unit_of_measurement: 'tsp' },

    // Chocolate Chip Cookies
    { id: 4, recipe_id: 2, ingredient_id: 3, amount: .5, unit_of_measurement: 'cup' },
    { id: 5, recipe_id: 2, ingredient_id: 7, amount: .5, unit_of_measurement: 'cup' },
    { id: 6, recipe_id: 2, ingredient_id: 4, amount: .25, unit_of_measurement: 'cup' },
    { id: 7, recipe_id: 2, ingredient_id: 8, amount: 1, unit_of_measurement: 'tsp' },
    { id: 8, recipe_id: 2, ingredient_id: 9, amount: 1, unit_of_measurement: 'unit' },
    { id: 9, recipe_id: 2, ingredient_id: 10, amount: 1.25, unit_of_measurement: 'cup' },
    { id: 10, recipe_id: 2, ingredient_id: 11, amount: .5, unit_of_measurement: 'tsp' },
    { id: 11, recipe_id: 2, ingredient_id: 12, amount: .5, unit_of_measurement: 'tsp' },
    { id: 12, recipe_id: 2, ingredient_id: 13, amount: 6, unit_of_measurement: 'oz' },

  ]);

  // return await knex.raw('SELECT setval(\'recipes_ingredients_id_seq\', (SELECT MAX(id) from recipes_ingredients));'); // postgres

};
