/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('gameType', function (table) {
            table.integer('gameId').unsigned().notNullable();
            table.foreign('gameId').references('id').inTable('game').onDelete("CASCADE");
            table.integer('typeId').unsigned().notNullable();
            table.foreign('typeId').references('id').inTable('type').onDelete("CASCADE");
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema
        .dropTable('gameType');
};
