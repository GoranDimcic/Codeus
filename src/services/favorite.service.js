import db from "../db/db.js"

export const getFavorite = async (userId, gameId) => {
    const result = await db('favorite')
        .where({
            userId: userId,
            gameId: gameId
        })
    return result;
}

export const getGamesFromFavorite = async (userId) => {
    let result = await db('favorite')
        .where({
            'favorite.userId': userId,
        })
        .select('game.id', 'game.gameTitle', 'game.gameDescription', 'game.mainPhoto', 'type.name')
        .leftJoin('game', 'favorite.gameId', '=', 'game.id')
        .innerJoin('gameType', 'favorite.gameId', '=', 'gameType.gameId')
        .leftJoin('type', 'gameType.typeId', '=', 'type.id')
        .leftJoin('rating', 'favorite.gameId', '=', 'rating.gameId')
        .avg('rating.ratingNumber as ratingNum')
        .orderBy('game.id')
        .groupBy('game.id', 'type.name')
    return result
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