import * as commentService from "../services/comment.service.js"

export const addComment = async (req, res) => {
    const { user_id, game_id, comment } = req.body;

    try {
        await commentService.createComment(user_id, game_id, comment)
        res.status(201).json({
            message: "Comment added for the game."
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const updateComment = async (req, res) => {
    const { user_id, game_id, comment } = req.body;

    try {
        const [comm] = await commentService.getComment(user_id, game_id)

        if (!comm) {
            res.status(401).json({
                message: "There is no comment for this game!"
            })
        }
        else {
            await commentService.updateComment(user_id, game_id, comment)
            res.status(201).json({
                message: "Comment is updated for the game."
            })
        }
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const deleteComment = async (req, res) => {
    const { user_id, game_id } = req.body;

    try {
        const [comment] = await commentService.getComment(user_id, game_id)

        if (!comment) {
            res.status(401).json({
                message: "There is no comment for this game!"
            })
        }
        else {
            await commentService.removeComment(user_id, game_id)
            res.status(201).json({
                message: "Comment removed for the game."
            })
        }
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}