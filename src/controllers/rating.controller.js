import * as ratingService from "../services/rating.service.js"

export const addRating = async (req, res) => {
    const { user_id, game_id, rate } = req.body

    try {
        await ratingService.createRating(user_id, game_id, rate)
        res.status(201).json({
            message: "You rated the game."
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const updateRating = async (req, res) => {
    const { user_id, game_id, rate } = req.body

    try {
        const [rating] = await ratingService.getRating(user_id, game_id)

        if (!rating) {
            res.status(401).json({
                message: "There is no rating for this game!"
            })
        }
        else {
            await ratingService.updateRating(user_id, game_id, rate)
            res.status(201).json({
                message: "You updated the rate."
            })
        }
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}