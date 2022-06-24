/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('comment', function (table) {
            table.integer('user_id').unsigned().notNullable();
            table.foreign('user_id').references('user_id').inTable('user').onDelete("CASCADE");
            table.integer('game_id').unsigned().notNullable();
            table.foreign('game_id').references('game_id').inTable('game').onDelete("CASCADE");
            table.text('comment').notNullable();
            table.dateTime('created_at').defaultTo(knex.fn.now());
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema
        .dropTable('comment');
};
