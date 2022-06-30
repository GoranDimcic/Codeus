import * as commentService from "../services/comment.service.js"

export const addComment = async (req, res) => {
    const { game_id, comment } = req.body;

    try {
        await commentService.createComment(req.user_id, game_id, comment)
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