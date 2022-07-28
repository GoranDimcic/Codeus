import db from '../db/db.js'

export const getSingleGame = async (gameId) => {
    const singleGame = await db('game as g')
        .select('id', 'gameTitle', 'gameDescription', 'mainPhoto', 'price', db.raw('ARRAY_AGG(DISTINCT p.image) as images'), db.raw('ARRAY_AGG(DISTINCT c.comment) as comments'))
        .where({
            'g.id': gameId
        })
        .leftJoin('pictures as p', { 'p.gameId': gameId })
        .leftJoin('comment as c', { 'c.gameId': gameId })
        .leftJoin('rating as r', { 'r.gameId': gameId })
        .avg('r.ratingNumber as ratingNum')
        .groupBy('g.id')
    return singleGame
}