
exports.up = function (knex, Promise) {

    return Promise.all(
        [
            knex.schema.createTable('meal_plan', table => {
                table.increments('id').primary();
                table.string('name', 200).notNullable();
                table.string('notes', 500);

                table.timestamps(true, true);
            }),
            knex.schema.createTable('meal_plan_recipe', table => {
                table.integer('meal_plan_id').references('meal_plan.id');
                table.integer('recipe_id').references('recipe.id');
                table.unique(['meal_plan_id', 'recipe_id']);
            }),
            knex.schema.createTable('shopping_list', table => {
                table.increments('id').primary();
                table.integer('meal_plan_id').references('meal_plan.id');
                table.integer('ingredient_id').references('ingredient.id');
                table.float('amount').notNullable();
                table.string('unit_of_measurement', 20).notNullable(); // TODO: Turn this into its own enum table

                table.unique(['meal_plan_id', 'ingredient_id', 'unit_of_measurement']);
                table.timestamps(true, true);
            })
        ]
    )
};

exports.down = function (knex, Promise) {
    return knex
        .schema
        .dropTableIfExists('shopping_list')
        .dropTableIfExists('meal_plan_recipe')
        .dropTableIfExists('meal_plan');
};
