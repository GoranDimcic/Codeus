import db from "../db/db.js"

export const createTransaction = async () => {
    const [{ transactionId }] = await db('transaction')
        .insert({}, 'transactionId')
    return transactionId;
}