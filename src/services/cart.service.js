import db from "../db/db.js"

export const getGameFromCart = async (userId, gameId) => {
    const result = await db('cart')
        .where({
            userId: userId,
            gameId: gameId
        })
    return result;
}

export const getGamesFromCart = async (userId) => {
    const result = await db('cart as c')
        .select('g.id', 'g.gameTitle', 'g.gameDescription', 'g.mainPhoto', 'g.price', db.raw('ARRAY_AGG(DISTINCT t.name) as typeName'))
        .where({
            'c.userId': userId,
            'transactionId': null
        })
        .leftJoin('game as g', { 'g.id': 'c.gameId' })
        .leftJoin('rating as r', { 'r.gameId': 'c.gameId' })
        .leftJoin('gameType as gt', { 'c.gameId': 'gt.gameId' })
        .leftJoin('type as t', { 'gt.typeId': 't.id' })
        .avg('r.ratingNumber as ratingNum')
        .groupBy('g.id')
        .orderBy('g.id')
    return result
}

export const addToCart = async (userId, gameId, price) => {
    const result = await db('cart')
        .insert({
            userId: userId,
            gameId: gameId,
            price: price,
        })
    return result;
}

export const updateCart = async (userId, transactionId) => {
    const result = await db('cart')
        .where({
            userId: userId,
            transactionId: null
        })
        .update({
            transactionId: transactionId
        })
    return result;
}

export const deleteFromCart = async (userId, gameId) => {
    const result = await db('cart')
        .where({
            userId: userId,
            gameId: gameId
        })
        .delete()
    return result
}