import db from "../db/db.js";

export const getRating = async (userId, gameId) => {
  const result = await db("rating").where({
    userId: userId,
    gameId: gameId,
  });
  return result;
};

export const newRating = async (gameId) => {
  const result = await db("rating")
    .where({
      gameId: gameId,
    })
    .avg("ratingNumber as rating");
  return result;
};

export const createRating = async (userId, gameId, rate) => {
  const result = await db("rating").insert({
    userId: userId,
    gameId: gameId,
    ratingNumber: rate,
  });
  return result;
};

export const updateRating = async (userId, gameId, rate) => {
  const result = db("rating")
    .where({
      userId: userId,
      gameId: gameId,
    })
    .update({
      ratingNumber: rate,
    });
  return result;
};
