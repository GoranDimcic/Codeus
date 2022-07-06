/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('pictures', function (table) {
            table.integer('gameId').unsigned().notNullable();
            table.foreign('gameId').references('id').inTable('game').onDelete("CASCADE");
            table.string('image');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema
        .dropTable('pictures');
};
