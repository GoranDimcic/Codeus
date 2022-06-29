import db from "../db/db.js"

export const getTransaction = async () => {
    const result = db('transaction')
    return result;
}

export const createTransaction = async () => {
    const result = db('transaction')
        .insert({})
    return result;
}