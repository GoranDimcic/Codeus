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

export const getGamesFromCart = async (user_id) => {
    const result = await db('cart')
        .where('cart.user_id', user_id)
        .join('game', 'cart.game_id', '=', 'game.game_id')
    //.join('rating', 'game.game_id', '=', 'rating.game_id')
    return result
}

export const getGamesFromFavorite = async (user_id) => {
    const result = await db('favorite')
        .where({
            user_id: user_id
        })
        .join('game', 'favorite.game_id', '=', 'game.game_id')
    //.join('rating', 'game.game_id', '=', 'rating.game_id')
    return result
}
