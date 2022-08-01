import * as commentService from "../services/comment.service.js"

export const AddComment = async (req, res) => {
    const { gameId, comment } = req.body;

    try {
        await commentService.createComment(req.id, gameId, comment)
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