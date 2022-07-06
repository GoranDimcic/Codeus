import jwt from "jsonwebtoken"
import 'dotenv/config'

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null)
        return res.status(401).json({
            message: "You are not logged in."
        })

    jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
        if (err) {
            return res.status(402).json({
                message: "Token is invalid or expired."
            })
        }
        req.id = data.id
        next()
    })
}

export default authenticateToken