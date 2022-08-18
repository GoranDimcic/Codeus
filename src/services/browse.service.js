import db from "../db/db.js"

export const getMostCommentedGame = async (ganre) => {
    // const result = await db('type as t')
    //     .select('t.id', 't.name', 'g.id', 'g.gameTitle', 'g.num_of_comments')
    //     .leftJoin('gameType as gt', { 'gt.typeId': 't.id' })
    //     .leftJoin(
    //         db('game as g')
    //             .select('g.id', 'g.gameTitle')
    //             .leftJoin('comment as c', { 'c.game': 'g.id' })
    //             .count('comment as num_of_comments')
    //     )
    //     .orderBy('t.name', 'asc', 'g.num_of_comments', 'desc')
    // console.log(result)
    // return result
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