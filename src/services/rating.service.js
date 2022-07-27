import db from '../db/db.js'

export const getRating = async (userId, gameId) => {
    const result = await db('rating')
        .where({
            userId: userId,
            gameId: gameId
        })
    return result;
}

export const getMostAvgRatedGames = async () => {
    const result = await db('rating')
        .select('gameId')
        .avg('ratingNumber')
        .groupBy('gameId')
        .orderBy('avg', 'desc')
        .limit(6)
    return result
}

export const createRating = async (userId, gameId, rate) => {
    const result = await db('rating')
        .insert({
            userId: userId,
            gameId: gameId,
            ratingNumber: rate
        })
    return result;
}

export const updateRating = async (userId, gameId, rate) => {
    const result = db('rating')
        .where({
            userId: userId,
            gameId: gameId
        })
        .update({
            ratingNumber: rate
        })
    return result;
}

export const deleteRating = async (userId, gameId) => {
    const result = db('rating')
        .where({
            userId: userId,
            gameId: gameId
        })
        .delete()
    return result;
}