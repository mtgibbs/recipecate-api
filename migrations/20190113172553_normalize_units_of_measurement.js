
exports.up = async (knex, Promise) => {

    if (!await knex.schema.hasTable('unit_of_measurement')) {
        await knex.schema
            .createTable('unit_of_measurement', table => {
                table.increments('id').primary();
                table.string('name', 20).notNullable();
            });

        await knex('unit_of_measurement').insert([
            { id: 1, name: 'unit' },
            { id: 2, name: 'tsp' },
            { id: 3, name: 'tbs' },
            { id: 4, name: 'oz' },
            { id: 5, name: 'lb' },
            { id: 6, name: 'cup' },
            { id: 7, name: 'pint' },
            { id: 8, name: 'quart' },
            { id: 9, name: 'gallon' }
        ]);
    }

    if (!await knex.schema.hasColumn('recipes_ingredients', 'unit_of_measurement_id')) {
        await knex.schema.alterTable('recipes_ingredients', table => {
            table.integer('unit_of_measurement_id').unsigned().references('unit_of_measurement.id');
        });
    }

    if (await knex.schema.hasColumn('recipes_ingredients', 'unit_of_measurement')) {

        await knex('recipes_ingredients').where('unit_of_measurement', 'unit').update('unit_of_measurement_id', 1);
        await knex('recipes_ingredients').where('unit_of_measurement', 'tsp').update('unit_of_measurement_id', 2);
        await knex('recipes_ingredients').where('unit_of_measurement', 'tbs').update('unit_of_measurement_id', 3);
        await knex('recipes_ingredients').where('unit_of_measurement', 'oz').update('unit_of_measurement_id', 4);
        await knex('recipes_ingredients').where('unit_of_measurement', 'lb').update('unit_of_measurement_id', 5);
        await knex('recipes_ingredients').where('unit_of_measurement', 'cup').update('unit_of_measurement_id', 6);
        await knex('recipes_ingredients').where('unit_of_measurement', 'pint').update('unit_of_measurement_id', 7);
        await knex('recipes_ingredients').where('unit_of_measurement', 'quart').update('unit_of_measurement_id', 8);
        await knex('recipes_ingredients').where('unit_of_measurement', 'gallon').update('unit_of_measurement_id', 9);

        await knex.schema.alterTable('recipes_ingredients', table => {
            table.dropColumn('unit_of_measurement');
        });
    }

    await knex.schema.alterTable('shopping_list', async table => {
        table.dropIndex([], 'shopping_list_unique');

        if (!await knex.schema.hasColumn('recipes_ingredients', 'unit_of_measurement_id')) {
            table.integer('unit_of_measurement_id').unsigned().references('unit_of_measurement.id');
        }
    });


    if (await knex.schema.hasColumn('shopping_list', 'unit_of_measurement')) {
        await knex('shopping_list').where('unit_of_measurement', 'unit').update('unit_of_measurement_id', 1);
        await knex('shopping_list').where('unit_of_measurement', 'tsp').update('unit_of_measurement_id', 2);
        await knex('shopping_list').where('unit_of_measurement', 'tbs').update('unit_of_measurement_id', 3);
        await knex('shopping_list').where('unit_of_measurement', 'oz').update('unit_of_measurement_id', 4);
        await knex('shopping_list').where('unit_of_measurement', 'lb').update('unit_of_measurement_id', 5);
        await knex('shopping_list').where('unit_of_measurement', 'cup').update('unit_of_measurement_id', 6);
        await knex('shopping_list').where('unit_of_measurement', 'pint').update('unit_of_measurement_id', 7);
        await knex('shopping_list').where('unit_of_measurement', 'quart').update('unit_of_measurement_id', 8);
        await knex('shopping_list').where('unit_of_measurement', 'gallon').update('unit_of_measurement_id', 9);
    }

    return knex.schema.alterTable('shopping_list', table => {
        table.unique(['meal_plan_id', 'ingredient_id', 'unit_of_measurement_id'], 'shopping_list_unique');
        table.dropColumn('unit_of_measurement');
    });
};

exports.down = async (knex, Promise) => {


    await knex.schema.alterTable('shopping_list', table => {
        table.dropIndex([], 'shopping_list_unique');
        table.string('unit_of_measurement', 20);
    });

    await knex('shopping_list').where('unit_of_measurement_id', 1).update('unit_of_measurement', 'unit');
    await knex('shopping_list').where('unit_of_measurement_id', 2).update('unit_of_measurement', 'tsp');
    await knex('shopping_list').where('unit_of_measurement_id', 3).update('unit_of_measurement', 'tbs');
    await knex('shopping_list').where('unit_of_measurement_id', 4).update('unit_of_measurement', 'oz');
    await knex('shopping_list').where('unit_of_measurement_id', 5).update('unit_of_measurement', 'lb');
    await knex('shopping_list').where('unit_of_measurement_id', 6).update('unit_of_measurement', 'cup');
    await knex('shopping_list').where('unit_of_measurement_id', 7).update('unit_of_measurement', 'pint');
    await knex('shopping_list').where('unit_of_measurement_id', 8).update('unit_of_measurement', 'quart');
    await knex('shopping_list').where('unit_of_measurement_id', 9).update('unit_of_measurement', 'gallon');

    await knex.schema.alterTable('shopping_list', table => {
        table.string('unit_of_measurement').notNullable().alter();
        table.unique(['meal_plan_id', 'ingredient_id', 'unit_of_measurement'], 'shopping_list_unique');
        table.dropColumn('unit_of_measurement_id');
    });


    await knex.schema.alterTable('recipes_ingredients', table => {
        table.string('unit_of_measurement', 20);
        table.integer('unit_of_measurement_id').unsigned().references('unit_of_measurement.id');
    });

    await knex('recipes_ingredients').where('unit_of_measurement_id', 1).update('unit_of_measurement', 'unit');
    await knex('recipes_ingredients').where('unit_of_measurement_id', 2).update('unit_of_measurement', 'tsp');
    await knex('recipes_ingredients').where('unit_of_measurement_id', 3).update('unit_of_measurement', 'tbs');
    await knex('recipes_ingredients').where('unit_of_measurement_id', 4).update('unit_of_measurement', 'oz');
    await knex('recipes_ingredients').where('unit_of_measurement_id', 5).update('unit_of_measurement', 'lb');
    await knex('recipes_ingredients').where('unit_of_measurement_id', 6).update('unit_of_measurement', 'cup');
    await knex('recipes_ingredients').where('unit_of_measurement_id', 7).update('unit_of_measurement', 'pint');
    await knex('recipes_ingredients').where('unit_of_measurement_id', 8).update('unit_of_measurement', 'quart');
    await knex('recipes_ingredients').where('unit_of_measurement_id', 9).update('unit_of_measurement', 'gallon');

    await knex.schema.alterTable('recipes_ingredients', table => {
        table.dropColumn('unit_of_measurement_id');
        table.string('unit_of_measurement').notNullable().alter();
    });

    return knex.schema.dropTableIfExists('unit_of_measurement')
};
