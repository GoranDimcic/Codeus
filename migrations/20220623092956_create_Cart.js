/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('cart', function (table) {
            table.increments('cart_id').primary();
            table.decimal('price').unsigned();
            table.integer('game_id').unsigned().notNullable();
            table.foreign('game_id').references('game_id').inTable('game').onDelete("CASCADE");
            table.integer('user_id').unsigned().notNullable();
            table.foreign('user_id').references('user_id').inTable('user').onDelete("CASCADE");
            table.integer('transaction_id').unsigned();
            table.foreign('transaction_id').references('transaction_id').inTable('transaction').onDelete("CASCADE");
            table.unique(['user_id', 'game_id'])
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema
        .dropTable('cart');
};
