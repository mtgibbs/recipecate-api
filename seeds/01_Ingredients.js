
exports.seed = function (knex, Promise) {

  return knex('recipes_ingredients').del()
    .then(() => {
      return knex('ingredient').del()
        .then(() => {
          return knex('table_name').insert([
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
            { id: 13, name: 'Chocolate Chips' },
          ]);
        });
    });

};
