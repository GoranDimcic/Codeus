import * as favoriteServices from "../services/favorite.service.js"

export const GamesFromFavorite = async (req, res) => {
    try {
        const games = await favoriteServices.getGamesFromFavorite(req.id)
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

export const AddFavorite = async (req, res) => {
    const { gameId } = req.body;

    try {
        await favoriteServices.createFavorite(req.id, gameId)
        res.status(201).json({
            message: "You added game to the favorite list."
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const DeleteFavorite = async (req, res) => {
    const { gameId } = req.body;

    try {
        const [favorite] = await favoriteServices.getFavorite(req.id, gameId)

        if (!favorite) {
            res.status(401).json({
                message: "There is no favorite game with that id!"
            })
        }
        else {
            await favoriteServices.removeFavorite(req.id, gameId)
            res.status(201).json({
                message: "You removed game from favorite list!"
            })
        }
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}