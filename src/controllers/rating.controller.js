import * as ratingService from "../services/rating.service.js"

export const AddRating = async (req, res) => {
    const { gameId, rate } = req.body

    try {
        await ratingService.createRating(req.id, gameId, rate)
        res.status(201).json({
            message: "You rated this game."
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const UpdateRating = async (req, res) => {
    const { gameId, rate } = req.body

    try {
        const [rating] = await ratingService.getRating(req.id, gameId)

        if (!rating) {
            res.status(401).json({
                message: "There is no rating for this game!"
            })
        }
        else {
            await ratingService.updateRating(req.id, gameId, rate)
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

export const DeleteRating = async (req, res) => {
    const { gameId } = req.body

    try {
        const [rating] = await ratingService.getRating(req.id, gameId)

        if (!rating) {
            res.status(401).json({
                message: "There is no rating for this game!"
            })
        }
        else {
            await ratingService.deleteRating(req.id, gameId)
            res.status(201).json({
                message: "You deleted the rating for this game."
            })
        }
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}
