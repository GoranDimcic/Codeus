import * as gamesService from "../services/games.service.js"

export const addGame = async (req, res) => {
    const { title, description, image, price } = req.body;

    try {
        await gamesService.createGame(title, description, image, price)
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
        const games = await gamesService.getGamesFromCart(req.user_id)
        res.status(201).json({
            message: "Get games!"
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
        const games = await gamesService.getGamesFromFavorite(req.user_id)
        res.status(201).json({
            message: "Get games!"
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}