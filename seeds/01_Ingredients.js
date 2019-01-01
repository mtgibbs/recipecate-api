
exports.seed = async (knex, Promise) => {

  await knex('recipes_ingredients').del();
  await knex('ingredient').del();

  await knex('ingredient').insert([
    { id: 1, name: 'White Onion' },
    { id: 2, name: 'Yellow Onion' },
    { id: 3, name: 'Butter' },
    { id: 4, name: 'Sugar' },
    { id: 5, name: 'Cocoa Powder' },
    { id: 6, name: 'Cayenne Pepper' },
    { id: 7, name: 'Brown Sugar' },
    { id: 8, name: 'Vanilla Extract' },
    { id: 9, name: 'Egg' },
    { id: 10, name: 'Flour' },
    { id: 11, name: 'Salt' },
    { id: 12, name: 'Baking Soda' },
    { id: 13, name: 'Chocolate Chips' }
  ]);

  return await knex.raw('SELECT setval(\'ingredient_id_seq\', (SELECT MAX(id) from ingredient));');

};
