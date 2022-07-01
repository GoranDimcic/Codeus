import db from "../db/db.js"

export const createCart = async (user_id, game_id, price) => {
    const result = await db('cart')
        .insert({
            user_id: user_id,
            game_id: game_id,
            price: price,
        })
    return result;
}

export const updateCart = async (user_id, transaction_id) => {
    const result = await db('cart')
        .where({
            user_id: user_id,
            transaction_id: null
        })
        .update({
            transaction_id: transaction_id
        })
    return result;
}

export const deleteFromCart = async (user_id, game_id) => {
    const result = await db('cart')
        .where({
            user_id: user_id,
            game_id: game_id
        })
        .delete()
    return result
}