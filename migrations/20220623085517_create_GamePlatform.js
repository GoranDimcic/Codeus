/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('gamePlatform', function (table) {
            table.integer('gameId').unsigned().notNullable();
            table.foreign('gameId').references('id').inTable('game').onDelete("CASCADE");
            table.integer('platformId').unsigned().notNullable();
            table.foreign('platformId').references('id').inTable('platform').onDelete("CASCADE");
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema
        .dropTable('gamePlatform')
};
