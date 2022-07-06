/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
    return knex.schema
        .createTable('user', function (table) {
            table.increments('id').primary();
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
            table.string('username').notNullable().unique();
            table.string('firstName').notNullable();
            table.string('lastName').notNullable();
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