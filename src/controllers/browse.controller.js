import * as browseService from "../services/browse.service.js"

export const MostCommentedGame = async (req, res) => {
    try {
        const game = await browseService.getMostCommentedGame()
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

export const MostFavoritedGames = async (req, res) => {
    try {
        const games = await browseService.getMostFavoritedGames()
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