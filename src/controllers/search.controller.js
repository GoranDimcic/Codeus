import * as searchService from "../services/search.service.js"

export const Search = async (req, res) => {
    const { searchGame, page, perPage } = req.query

    try {
        const games = await searchService.searchGames(searchGame, page, perPage)

        res.status(201).json({
            data: games
        })
    }
    catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Error"
        })
    }
}

export const Types = async (req, res) => {
    try {
        const types = await searchService.getTypes()

        res.status(201).json({
            data: types
        })
    }
    catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Error"
        })
    }
}

export const Platforms = async (req, res) => {
    try {
        const platforms = await searchService.getPlatforms()

        res.status(201).json({
            data: platforms
        })
    }
    catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Error"
        })
    }
}