
exports.up = function (knex, Promise) {
    return knex.schema
        .alterTable('recipe', table => {
            table.boolean('is_deleted').notNullable().defaultTo(false);
            table.index('is_deleted');
            table.timestamps(true, true);
        })
        .alterTable('meal_plan', table => {
            table.boolean('is_deleted').notNullable().defaultTo(false);
            table.index('is_deleted');
        });

};

exports.down = function (knex, Promise) {
    return knex.schema
        .alterTable('recipe', table => {
            table.dropIndex('is_deleted');
            table.dropColumn('is_deleted');
            table.dropTimestamps();
        })
        .alterTable('meal_plan', table => {
            table.dropIndex('is_deleted');
            table.dropColumn('is_deleted');
        });
};
