import db from "../db/db.js"

export const getComment = (user_id, game_id) => {
    const result = db('comment')
        .where({
            user_id: user_id,
            game_id: game_id
        })

    return result;
}