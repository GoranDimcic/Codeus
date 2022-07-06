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

export const getMostCommentedGame = async () => {
    const result = await db('comment')
        .select('game_id')
        .count('game_id')
        .groupBy('game_id')
        .orderBy('count', 'desc')
        .limit(6)
    return result
}

export const getMostAvgRatedGames = async () => {
    const result = await db('rating')
        .select('game_id')
        .avg('rating_number')
        .groupBy('game_id')
        .orderBy('avg', 'desc')
        .limit(6)
    //uporedi sa datumom od pre x dana
    return result
}

export const getMostRatedGames = async () => {
    const result = await db('rating')
        .select('game_id')
        .count('rating_number')
        .groupBy('game_id')
        .orderBy('count', 'desc')
        .limit(3)
    //uporedi sa tipom igre
    return result
}

export const getSingleGame = async (game_id) => {
    const result = await db('game')
        .where('game.game_id', game_id)
        .join('pictures', 'pictures.game_id', '=', 'game.game_id').select('game.*', 'pictures.image as picture')
        .join('comment', 'comment.game_id', '=', 'game.game_id')
    return result
}