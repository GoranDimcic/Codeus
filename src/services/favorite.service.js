import db from "../db/db.js"

export const getFavorite = async (userId, gameId) => {
    const result = await db('favorite')
        .where({
            userId: userId,
            gameId: gameId
        })
    return result;
}

export const createFavorite = async (userId, gameId) => {
    const result = await db('favorite')
        .insert({
            userId: userId,
            gameId: gameId
        })
    return result;
}

export const removeFavorite = async (userId, gameId) => {
    const result = await db('favorite')
        .where({
            userId: userId,
            gameId: gameId
        })
        .delete()
    return result;
}