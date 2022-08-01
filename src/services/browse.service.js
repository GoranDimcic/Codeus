import db from "../db/db.js"

export const getMostCommentedGame = async () => {
    const result = await db('comment as c')
        .select('g.mainPhoto')
        .leftJoin('game as g', { 'c.gameId': 'g.id' })
        .groupBy('g.mainPhoto')
        .count('g.mainPhoto as comments')
        .orderBy('comments', 'desc')
        .limit(1)
    return result
}

export const getMostFavoritedGames = async () => {
    const result = await db('favorite as f')
        .select('g.mainPhoto', 'f.gameId')
        .leftJoin('game as g', { 'f.gameId': 'g.id' })
        .groupBy('g.mainPhoto', 'f.gameId')
        .count('g.mainPhoto as favorites')
        .orderBy('favorites', 'desc')
        .limit(6)
    return result
}