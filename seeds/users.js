import * as fs from 'fs';
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert(JSON.parse(fs.readFileSync('seeds/data/users.json', 'utf-8')));
};