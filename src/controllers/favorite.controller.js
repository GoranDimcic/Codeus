import * as favoriteServices from "../services/favorite.service.js"

export const addFavorite = async (req, res) => {
    const { game_id } = req.body;

    try {
        await favoriteServices.createFavorite(req.user_id, game_id)
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

export const deleteFavorite = async (req, res) => {
    const { game_id } = req.body;

    try {
        const [favorite] = await favoriteServices.getFavorite(req.user_id, game_id)

        if (!favorite) {
            res.status(401).json({
                message: "There is no favorite game with that id!"
            })
        }
        else {
            await favoriteServices.removeFavorite(req.user_id, game_id)
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