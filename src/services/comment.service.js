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

export const createComment = (userId, gameId, comment) => {
    const result = db('comment')
        .insert({
            userId: userId,
            gameId: gameId,
            comment: comment
        })
    return result;
}