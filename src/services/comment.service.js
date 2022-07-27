import db from "../db/db.js"

export const getMostCommentedGame = async () => {
    const result = await db('comment')
        .select('gameId')
        .count('gameId')
        .groupBy('gameId')
        .orderBy('count', 'desc')
        .limit(6)
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