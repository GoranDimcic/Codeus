import * as authService from '../services/auth.service.js';
import bcrypt from "bcrypt"
import 'dotenv/config'

export const register = async (req, res) => {
    const { email, username, password, repeatPassword, firstName, lastName } = req.body;
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    const [user] = await authService.getUser(email, username)

    if (!user) {
        if (password == repeatPassword) {
            await authService.createUser(email.toLowerCase(), username, encryptedUserPassword, firstName, lastName)

            res.status(201).json({
                message: "You are successfully registred.",
            })
        }
        else {
            res.status(201).json({
                message: "Password is not matching!",
            })
        }
    }
    else {
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