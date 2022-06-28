import db from '../db/db.js'

export const getRating = async (user_id, game_id) => {
    const result = await db('rating')
        .where({
            user_id: user_id,
            game_id: game_id
        })

        return result;
}

export const createRating = async (user_id, game_id, rate) => {
    const result = await db('rating')
        .insert({
            user_id: user_id,
            game_id: game_id,
            rating_number: rate
        })

    return result;
}

export const updateRating = async (user_id, game_id, rate) => {
    const result = db('rating')
        .where({
            user_id: user_id,
            game_id: game_id
        })
        .update({
            rating_number: rate
        })

    return result;
}