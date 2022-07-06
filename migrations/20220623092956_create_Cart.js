/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('cart', function (table) {
            table.increments('id').primary();
            table.decimal('price').unsigned();
            table.integer('gameId').unsigned().notNullable();
            table.foreign('gameId').references('id').inTable('game').onDelete("CASCADE");
            table.integer('userId').unsigned().notNullable();
            table.foreign('userId').references('id').inTable('user').onDelete("CASCADE");
            table.integer('transactionId').unsigned();
            table.foreign('transactionId').references('id').inTable('transaction').onDelete("CASCADE");
            table.unique(['userId', 'gameId'])
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
