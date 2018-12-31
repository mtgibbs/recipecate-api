
exports.seed = function (knex, Promise) {

  return knex('recipes_ingredients').del()
    .then(() => {
      return knex('recipe').del()
        .then(() => {
          return knex('recipe').insert([
            { id: 1, name: 'Hot Cocoa', instructions: 'TODO FILL THESE IN' },
            { id: 2, name: 'Chocolate Chip Cookies', instructions: 'TODO FILL THESE IN' }
          ]);
        });
    });

};
