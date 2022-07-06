import db from "../db/db.js"

export const createCart = async (userId, gameId, price) => {
    const result = await db('cart')
        .insert({
            userId: userId,
            gameId: gameId,
            price: price,
        })
    return result;
}

export const updateCart = async (userId, transactionId) => {
    const result = await db('cart')
        .where({
            userId: userId,
            transactionId: null
        })
        .update({
            transactionId: transactionId
        })
    return result;
}

export const deleteFromCart = async (userId, gameId) => {
    const result = await db('cart')
        .where({
            userId: userId,
            gameId: gameId
        })
        .delete()
    return result
}