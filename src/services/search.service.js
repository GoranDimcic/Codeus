import db from '../db/db.js'

export const searchGames = async (searchGame, page = 1, perPage = 5) => {
    const offset = (page - 1) * perPage;
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
        .limit(perPage)

    const count = await db('game as g')
        .where('g.gameTitle', 'like', `%${searchGame || ''}%`)
        .count('g.id')

    const totalCount = count[0]?.count || 0

    return {
        results: games,
        metaData: {
            page: Number(page),
            perPage: Number(perPage),
            totalCount: Number(totalCount),
            totalPages: Math.ceil(totalCount / perPage)
        }
    }
}

export const getTypes = async () => {
    const types = await db('type')
        .select()
    return types;
}

export const getPlatforms = async () => {
    const platforms = await db('platform')
        .select()
    return platforms;
}