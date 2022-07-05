import * as fs from 'fs';
/**
 * @param { import("knex").Knex },
 *  knex
 * @returns { Promise<void> },
 * 
 */

export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex("game").del();
  await knex("game").insert(JSON.parse(fs.readFileSync('seeds/data/games.json', 'utf-8')));
};