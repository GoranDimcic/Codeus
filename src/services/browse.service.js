import db from "../db/db.js"

export const getMostCommentedGame = async (ganre) => {
    const result = await db('comment as c')
        .select('g.mainPhoto', 'g.id')
        .leftJoin('game as g', { 'c.gameId': 'g.id' })
        .groupBy('g.mainPhoto', 'g.id')
        .count('g.mainPhoto as comments')
        .orderBy('comments', 'desc')
        .limit(1)
    return result
}

export const getMostRatedGames = async (ganre) => {
    const result = await db('rating as r')
        .select('g.mainPhoto', 'r.gameId')
        .leftJoin('game as g', { 'r.gameId': 'g.id' })
        .groupBy('r.gameId', 'g.mainPhoto')
        .count('r.gameId as ratings')
        .orderBy('ratings', 'desc')
        .limit(3)
    return result;
}

export const getMostFavoritedGames = async (ganre) => {
    const result = await db('favorite as f')
        .select('g.mainPhoto', 'f.gameId')
        .leftJoin('game as g', { 'f.gameId': 'g.id' })
        .groupBy('g.mainPhoto', 'f.gameId')
        .count('g.mainPhoto as favorites')
        .orderBy('favorites', 'desc')
        .limit(6)
    return result
}

export const getRandomGames = async (ganre) => {
    const result = await db('game as g')
        .select('g.id', 'mainPhoto')
        .orderByRaw('RANDOM()')
        .limit(5)
    return result
}