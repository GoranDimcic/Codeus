import * as ratingService from "../services/rating.service.js"

export const addRating = async (req, res) => {
    const { user_id, game_id, rate } = req.body

    try {
        await ratingService.createRating(user_id, game_id, rate)
        res.status(200).json({
            message: "You rated the game."
        })
    }
    catch (error) {
        res.status(400).json({
            message: "Error"
        })
    }
}

export const updateRating = async (req, res) => {
    const { user_id, game_id, rate } = req.body

    try {
        await ratingService.updateRating(user_id, game_id, rate)
        res.status(200).json({
            message: "You updated the rate."
        })
    }
    catch (error) {
        res.status(400).json({
            message: "Error"
        })
    }
}