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