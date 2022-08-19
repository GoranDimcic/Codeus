import * as browseService from "../services/browse.service.js"

export const BrowseGames = async (req, res) => {
    const {type} = req.query

    try {
        const comment = await browseService.getMostCommentedGame(type)
        const rate = await browseService.getMostRatedGames(type)
        const favorite = await browseService.getMostFavoritedGames(type)
        const price = await browseService.getMostPricedGames(type)

        res.status(201).json({
            data: {
                comment,
                favorite,
                rate,
                price
            }
        })
    }
    catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Error"
        })
    }
}
