
exports.up = function (knex, Promise) {

    return Promise.all([
        knex.schema.createTable('recipe', table => {
            table.increments('id').primary();
            table.string('name', 200).notNullable();
            table.string('instructions', 1000);

            table.unique('name');
        }),
        knex.schema.createTable('ingredient', table => {
            table.increments('id').primary();
            table.string('name', 200).notNullable();
            table.unique('name');
        }),
        knex.schema.createTable('recipes_ingredients', table => {
            table.increments('id').primary();

            table.integer('recipe_id').unsigned();
            table.foreign('recipe_id').references('id').inTable('recipe');

            table.integer('ingredient_id').unsigned();
            table.foreign('ingredient_id').references('id').inTable('ingredient');
            
            table.float('amount').notNullable();
            table.string('unit_of_measurement', 20).notNullable();

            table.unique(['recipe_id', 'ingredient_id']);
        })
    ]);
};

exports.down = function (knex, Promise) {
    return knex
        .schema
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('recipe')
        .dropTableIfExists('ingredient');
};
