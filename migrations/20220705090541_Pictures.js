/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('pictures', function (table) {
            table.integer('game_id').unsigned().notNullable();
            table.foreign('game_id').references('game_id').inTable('game').onDelete("CASCADE");
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
