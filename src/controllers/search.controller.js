import * as searchService from "../services/search.service.js"

export const Search = async (req, res) => {
    const searchGame = req.query.search
    const offset = req.query.offset

    try {
        const games = await searchService.searchGames(searchGame, offset)

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
