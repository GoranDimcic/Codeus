/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('gameType', function (table) {
            table.integer('game_id').unsigned().notNullable();
            table.foreign('game_id').references('game_id').inTable('game').onDelete("CASCADE");
            table.integer('type_id').unsigned().notNullable();
            table.foreign('type_id').references('type_id').inTable('type').onDelete("CASCADE");
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
