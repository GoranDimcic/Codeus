/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('game', function (table) {
            table.increments('id').primary();
            table.string('gameTitle').notNullable();
            table.text('gameDescription');
            table.string('mainPhoto');
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
