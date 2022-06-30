/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('user', function (table) {
            table.increments('user_id').primary();
            table.string('email').notNullable().unique();
            table.string('username').notNullable().unique();
            table.string('password').notNullable();
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
    return knex.schema
        .dropTable('user');
};