/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('favorite', function (table) {
            table.integer('userId').unsigned().notNullable();
            table.foreign('userId').references('id').inTable('user').onDelete("CASCADE");
            table.integer('gameId').unsigned().notNullable();
            table.foreign('gameId').references('id').inTable('game').onDelete("CASCADE");
            table.dateTime('createdAt').defaultTo(knex.fn.now());
            table.unique(['userId', 'gameId']);
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
