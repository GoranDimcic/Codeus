import * as authService from '../services/auth.service.js';
import jwt from "jsonwebtoken"
import 'dotenv/config'
import bcrypt from "bcrypt"

export const register = async (req, res) => {
    const { email, username, password, first_name, last_name } = req.body;
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    try {
        const [user] = await authService.getUser(email.toLowerCase(), username)

        if (!user) {
            await authService.createUser(email.toLowerCase(), username, encryptedUserPassword, first_name, last_name)
            const [user] = await authService.getUser(email.toLowerCase(), username)

            const token = jwt.sign(
                {
                    user_id: user.user_id
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            res.status(201).json({
                message: "You are successfully registred.",
                data: { accessToken: token }
            })
        }
        else {
            res.status(401).json({
                message: "Email or username is taken, try again."
            })
        }
    }
    catch (error) {
        res.status(401).json({
            message: "Email or username is taken, try again."
        })
    }
}

export const login = async (req, res) => {
    const { usernameOrEmail, password } = req.body
    let user

    try {
        if (usernameOrEmail.includes('@')) {
            [user] = await authService.getUserByEmail(usernameOrEmail)
        }
        else {
            [user] = await authService.getUserByUsername(usernameOrEmail)
        }

        if (!user) {
            res.status(401).json({
                message: "Wrong email or username."
            })
        }
        else {
            const isCorrect = await bcrypt.compare(password, user.password)
            if (isCorrect) {
                const token = jwt.sign(
                    {
                        user_id: user.user_id
                    },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "2h",
                    }
                );

                res.status(201).json({
                    message: "You are successfully logged.",
                    data: { accessToken: token }
                })
            }
            else {
                res.status(401).json({
                    message: "Wrong password!"
                })
            }
        }
    }
    catch (error) {
        res.status(401).json({
            message: "Error!"
        })
    }
}

export const update = async (req, res) => {
    const { email, username, first_name, last_name } = req.body;

    try {
        const [user] = await authService.getUser(email, username);

        if (!user) {
            res.status(401).json({
                message: "No user with that email!"
            })
        }
        else {
            await authService.updateUser(email, username, first_name, last_name)
            res.status(201).json({
                message: "Update complete."
            })
        }
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const updatePassword = async (req, res) => {

}