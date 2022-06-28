import * as favoriteServices from "../services/favorite.service.js"

export const addFavorite = async (req, res) => {
    const { user_id, game_id } = req.body;

    try {
        await favoriteServices.createFavorite(user_id, game_id)
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
    const { user_id, game_id } = req.body;

    try {
        const [favorite] = await favoriteServices.getFavorite(user_id, game_id)

        if (!favorite) {
            res.status(401).json({
                message: "No favorite game!"
            })
        }
        else {
            await favoriteServices.removeFavorite(user_id, game_id)
            res.status(201).json({
                message: "You removed game from favorite list."
            })
        }
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}