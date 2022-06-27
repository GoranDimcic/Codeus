import db from '../db/db.js'

export const createGame = async (title, description, image, price) => {

    const result = await db('game')
        .insert({
            title: title,
            description: description,
            image: image,
            price: price
        })

    return result;
}