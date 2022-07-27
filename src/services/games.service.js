import db from '../db/db.js'

export const getSingleGame = async (gameId) => {
    const game = await db('game')
        .select('id', 'gameTitle', 'gameDescription', 'game.mainPhoto', 'game.price', 'r.ratingNumber'
        )
        .where({ 'id': gameId })
        .leftJoin('rating as r', { 'r.gameId': 'id' })

    const images = await db('pictures')
        .select('image')
        .where({ 'pictures.gameId': gameId })

    const comments = await db('comment')
        .select('userId', 'comment', 'createdAt')
        .where({ 'comment.gameId': gameId })

    return {
        ...game,
        comments: [...comments],
        images: [...images]
    }
    // .select('id', 'gameTitle')
    // .leftJoin(
    //     db('pictures')
    //         .select()
    //         .as('p'),
    //     'game.id',
    //     'p.gameId'
    // )
    // .groupBy('game.id')
    // .where({ 'id': gameId })
    // .as('g')
}