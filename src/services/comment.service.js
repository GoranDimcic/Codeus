import db from "../db/db.js"


export const createComment = (user_id, game_id, comment) => {
    const result = db('comment')
        .insert({
            user_id: user_id,
            game_id: game_id,
            comment: comment
        })

    return result;
}