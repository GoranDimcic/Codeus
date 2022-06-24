/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('favorite', function (table) {
            table.integer('user_id').unsigned().notNullable();
            table.foreign('user_id').references('user_id').inTable('user').onDelete("CASCADE");
            table.integer('game_id').unsigned().notNullable();
            table.foreign('game_id').references('game_id').inTable('game').onDelete("CASCADE");
            table.dateTime('created_at').defaultTo(knex.fn.now());
            table.unique(['user_id', 'game_id']);
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema
        .dropTable("favorite")
};
