import db from "../db/db.js"

export const addCart = (game_id, user_id, transaction_id, price) => {
    const result = db('cart')
        .insert({
            game_id: game_id,
            user_id: user_id,
            transaction_id: transaction_id,
            price: price
        })
    return result;
}