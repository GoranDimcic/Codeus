import db from "../db/db.js"

export const createComment = (userId, gameId, comment) => {
    const result = db('comment')
        .insert({
            userId: userId,
            gameId: gameId,
            comment: comment
        })
    return result;
}