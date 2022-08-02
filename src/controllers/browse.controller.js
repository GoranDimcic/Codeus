import * as browseService from "../services/browse.service.js"

export const BrowseGames = async (req, res) => {
    try {
        const comment = await browseService.getMostCommentedGame(ganre)
        const rate = await browseService.getMostRatedGames(ganre)
        const favorite = await browseService.getMostFavoritedGames(ganre)
        const random = await browseService.getRandomGames(ganre)

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

export const MostCommentedGame = async (req, res) => {
    try {
        const game = await browseService.getMostCommentedGame()
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

export const MostRatedGames = async (req, res) => {
    try {
        const games = await browseService.getMostRatedGames()
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

export const MostFavoritedGames = async (req, res) => {
    try {
        const games = await browseService.getMostFavoritedGames()
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

export const RandomGames = async (req, res) => {
    try {
        const games = await browseService.getRandomGames()
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

//za zadnje 5 igre i za sve ove 4 fje, ubaci zanr igre