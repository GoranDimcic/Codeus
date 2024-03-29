import * as favoriteServices from "../services/favorite.service.js"

export const GamesFromFavorite = async (req, res) => {
    try {
        const games = await favoriteServices.getGamesFromFavorite(req.id)
        res.status(201).json({
            data: games
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
    const favorite = await favoriteServices.getFavorite(req.id, gameId)

    if (favorite.length) {
        res.status(400).json({
            message: "Game is already in favorites!"
        })
    }
    else {
        try {
            await favoriteServices.createFavorite(req.id, gameId)
            res.status(201).json({
                message: "You added game to the favorite list.",
            })
        }
        catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Error"
            })
        }
    }
}

export const DeleteFavorite = async (req, res) => {
    const { id } = req.params;
    const favorite = await favoriteServices.getFavorite(req.id, id)

    if (!favorite.length) {
        res.status(400).json({
            message: "Game is not in favorites!"
        })
    }
    else {
        try {
            await favoriteServices.removeFavorite(req.id, id)
            res.status(201).json({
                message: "You removed game from favorite list!"
            })
        }
        catch (error) {
            console.log(error)
            res.status(401).json({
                message: "Error"
            })
        }
    }
}