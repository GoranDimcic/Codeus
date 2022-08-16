import db from "../db/db.js"

export const createTransaction = async () => {
    const res = await db.raw('INSERT INTO "transaction" DEFAULT VALUES returning *')
    return res.rows[0]?.id;
}