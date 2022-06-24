/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('game', function (table) {
            table.increments('game_id').primary();
            table.string('title').notNullable();
            table.text('description');
            table.string('image');
            table.decimal('price').unsigned();
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema
        .dropTable('game');
};
