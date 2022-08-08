import * as gamesService from "../services/games.service.js"

export const SingleGame = async (req, res) => {
    const { id } = req.params

    try {
        const game = await gamesService.getSingleGame(parseInt(id))
        const comments = await gamesService.getSingleGameComments(parseInt(id))
        res.status(201).json({
            data: { game, comments }
        })
    }
    catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Error"
        })
    }
}

export const AllGames = async (req, res) => {
    try {
        const game = await gamesService.getAllGames()
        res.status(201).json({
            data: game
        })
    }
    catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Error"
        })
    }
}