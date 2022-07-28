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
    const favorites = await db('favorite as f')
        .select('g.id', 'g.gameTitle', 'g.gameDescription', 'g.mainPhoto', db.raw('ARRAY_AGG(DISTINCT t.name) as typeName'))
        .where({
            'f.userId': userId
        })
        .leftJoin('game as g', { 'g.id': 'f.gameId' })
        .leftJoin('rating as r', { 'r.gameId': 'f.gameId' })
        .leftJoin('gameType as gt', { 'f.gameId': 'gt.gameId' })
        .leftJoin('type as t', { 'gt.typeId': 't.id' })
        .avg('r.ratingNumber as ratingNum')
        .groupBy('g.id')
        .orderBy('g.id')
    return favorites
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