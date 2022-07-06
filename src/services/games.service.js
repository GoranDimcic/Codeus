import db from '../db/db.js'

export const createGame = async (gameTitle, gameDescription, mainPhoto, price) => {
    const result = await db('game')
        .insert({
            gameTitle: gameTitle,
            gameDescription: gameDescription,
            mainPhoto: mainPhoto,
            price: price
        })

    return result;
}

export const getGamesFromCart = async (userId) => {
    const result = await db('cart')
        .where('cart.userId', userId)
        .join('game', 'cart.gameId', '=', 'game.gameId')
    //.join('rating', 'game.game_id', '=', 'rating.game_id')
    return result
}

export const getGamesFromFavorite = async (userId) => {
    const result = await db('favorite')
        .where({
            userId: userId
        })
        .join('game', 'favorite.gameId', '=', 'game.gameId')
    //.join('rating', 'game.game_id', '=', 'rating.game_id')
    return result
}

export const getMostCommentedGame = async () => {
    const result = await db('comment')
        .select('gameId')
        .count('gameId')
        .groupBy('gameId')
        .orderBy('count', 'desc')
        .limit(6)
    return result
}

export const getMostAvgRatedGames = async () => {
    const result = await db('rating')
        .select('gameId')
        .avg('ratingNumber')
        .groupBy('gameId')
        .orderBy('avg', 'desc')
        .limit(6)
    //uporedi sa datumom od pre x dana
    return result
}

export const getMostRatedGames = async () => {
    const result = await db('rating')
        .select('gameId')
        .count('rating_number')
        .groupBy('gameId')
        .orderBy('count', 'desc')
        .limit(3)
    //uporedi sa tipom igre
    return result
}

export const getSingleGame = async (game_id) => {
    const result = await db('game')
        .where('game.gameId', game_id)
        .join('pictures', 'pictures.gameId', '=', 'game.gameId').select('game.*', 'pictures.image as picture')
        .join('comment', 'comment.gameId', '=', 'game.gameId')
    return result
}