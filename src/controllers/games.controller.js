import * as gamesService from "../services/games.service.js"

export const addGame = async (req, res) => {
    const { gameTitle, gameDescription, mainPhoto, price } = req.body;

    try {
        await gamesService.createGame(gameTitle, gameDescription, mainPhoto, price)
        res.status(201).json({
            message: "Game created."
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const getGamesFromCart = async (req, res) => {
    try {
        const games = await gamesService.getGamesFromCart(req.id)
        res.status(201).json({
            message: games
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const getGamesFromFavorite = async (req, res) => {
    try {
        const games = await gamesService.getGamesFromFavorite(req.id)
        res.status(201).json({
            message: games
        })
    }
    catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Error"
        })
    }
}

export const getMostCommentedGame = async (req, res) => {
    try {
        const game = await gamesService.getMostCommentedGame()
        res.status(201).json({
            message: game
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const getMostAvgRatedGames = async (req, res) => {
    try {
        const games = await gamesService.getMostAvgRatedGames()
        res.status(201).json({
            message: games
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const getMostRatedGames = async (req, res) => {
    try {
        const game = await gamesService.getMostRatedGames()
        res.status(201).json({
            message: game
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const getSingleGame = async (req, res) => {
    const { gameId } = req.body
    try {
        const game = await gamesService.getSingleGame(gameId)
        res.status(201).json({
            message: game
        })
    }
    catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Error"
        })
    }
}

