import * as gamesService from "../services/games.service.js"

export const SingleGame = async (req, res) => {
    const { gameId } = req.body
    try {
        const game = await gamesService.getSingleGame(gameId)
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

export const AllGames = async (req, res) => {
    try {
        const game = await gamesService.getAllGames()
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