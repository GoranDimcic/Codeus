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
        .join('game', 'cart.gameId', '=', 'game.id')
        //isto kao za favorite
    return result
}

export const getGamesFromFavorite = async (userId) => {
    let result = await db('favorite')
        .where({
            'favorite.userId': userId,
        })
        .leftJoin('game', 'favorite.gameId', '=', 'game.id')
        .innerJoin('gameType', 'favorite.gameId', '=', 'gameType.gameId')
        .leftJoin('type', 'gameType.typeId', '=', 'type.id')
        .leftJoin('rating', 'favorite.gameId', '=', 'rating.gameId')
        .groupBy('game.id', 'type.name')
        .select('game.id', 'game.gameTitle', 'game.gameDescription', 'game.mainPhoto', 'type.name')
        .avg('rating.ratingNumber as ratingNum')
        .orderBy('game.id')
    return result
}

export const getSingleGame = async (gameId) => {
    const result = await db('game')
        .where({
            id: gameId
        })
        .leftJoin('rating', 'game.id', '=', 'rating.gameId')
        .leftJoin('comment', 'game.id', '=', 'comment.gameId')
        .leftJoin('pictures', 'game.id', '=', 'pictures.gameId')
        .groupBy('game.id', 'comment.comment', 'comment.userId', 'comment.createdAt', 'pictures.image')
        .select('game.id', 'game.gameTitle', 'game.gameDescription', 'game.mainPhoto', 'game.price',
            'comment.comment', 'comment.userId', 'comment.createdAt',
            'pictures.image')
        .avg('rating.ratingNumber as ratingNum')
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
        .count('ratingNumber')
        .groupBy('gameId')
        .orderBy('count', 'desc')
        .limit(3)
    //uporedi sa tipom igre
    return result
}