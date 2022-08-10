import db from '../db/db.js'

export const searchGames = async (searchGame, offset) => {
    const games = await db('game as g')
        .select('g.id', 'gameTitle', 'gameDescription', 'mainPhoto', 'price', db.raw('ARRAY_AGG(DISTINCT t.name) as typeName'))
        .where('g.gameTitle', 'like', `%${searchGame || ''}%`)
        .leftJoin('rating as r', { 'g.id': 'r.gameId' })
        .leftJoin('gameType as gt', { 'g.id': 'gt.gameId' })
        .leftJoin('type as t', { 'gt.typeId': 't.id' })
        .avg('r.ratingNumber as ratingNum')
        .groupBy('g.id')
        .orderBy('g.id')
        .offset(offset)
        .limit(30)
    return games
}