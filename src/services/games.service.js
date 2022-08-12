import db from '../db/db.js'

export const getSingleGame = async (gameId) => {
    const singleGame = await db('game as g')
        .select('g.id', 'gameTitle', 'gameDescription', 'mainPhoto', 'price', db.raw('ARRAY_AGG(p.image) as images'))
        .where({
            'g.id': gameId
        })
        .leftJoin('pictures as p', { 'p.gameId': gameId })
        .leftJoin('rating as r', { 'r.gameId': gameId })
        .avg('r.ratingNumber as ratingNum')
        .groupBy('g.id')
    return singleGame
}

export const getSingleGameComments = async (gameId) => {
    const commentsGame = await db('comment as c')
        .select('u.username', 'c.comment', 'c.createdAt')
        .where({
            'c.gameId': gameId
        })
        .innerJoin('user as u', { 'c.userId': 'u.id' })
    return commentsGame
}