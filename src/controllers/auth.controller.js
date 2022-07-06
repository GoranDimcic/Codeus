import * as authService from '../services/auth.service.js';
import bcrypt from "bcrypt"
import 'dotenv/config'

export const register = async (req, res) => {
    const { email, username, password, firstName, lasdtName } = req.body;
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    try {
        const [user] = await authService.getUser(email.toLowerCase(), username)

        if (!user) {
            await authService.createUser(email.toLowerCase(), username, encryptedUserPassword, firstName, lasdtName)
            const [user] = await authService.getUser(email.toLowerCase(), username)

            const token = await authService.getToken(user)

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
                const token = await authService.getToken(user)

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
    const { firstName, lasdtName } = req.body;
    try {
        const [user] = await authService.getUserById(req.user_id);

        if (!user) {
            res.status(401).json({
                message: "No user with that email!"
            })
        }
        else {
            await authService.updateUser(user.user_id, firstName, lasdtName)
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