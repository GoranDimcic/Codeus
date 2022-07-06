import db from "../db/db.js"

export const createTransaction = async () => {
    const [{ transaction_id }] = await db('transaction')
        .insert({}, 'transaction_id')
    return transaction_id;
}