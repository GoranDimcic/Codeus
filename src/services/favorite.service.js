import db from "../db/db.js"

export const getFavorite = async (user_id, game_id) => {
    const result = await db('favorite')
        .where({
            user_id: user_id,
            game_id: game_id
        })

    return result;
}

export const createFavorite = async (user_id, game_id) => {
    const result = await db('favorite')
        .insert({
            user_id: user_id,
            game_id: game_id
        })

    console.log(result)

    return result;
}

export const removeFavorite = async (user_id, game_id) => {
    const result = await db('favorite')
        .where({
            user_id: user_id,
            game_id: game_id
        })
        .delete()

    return result;
}