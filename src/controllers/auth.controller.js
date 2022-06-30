import * as authService from '../services/auth.service.js';
import jwt from "jsonwebtoken"
import 'dotenv/config'
import bcrypt from "bcrypt"

export const register = async (req, res) => {
    const { email, username, password, first_name, last_name } = req.body;
    const encryptedUserPassword = await bcrypt.hash(password, 10);

    try {
        const [user] = await authService.getUser(email)

        if (!user) {
            await authService.createUser(email, username, encryptedUserPassword, first_name, last_name)
            const [user] = await authService.getUser(email)

            const token = jwt.sign(
                { user_id: user.user_id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            user.token = token

            res.status(201).json({
                message: "You are successfully registred.",
                data: { accessToken: token }
            })
        }
        else {
            res.status(401).json({
                message: "Email is taken, try again."
            })
        }
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [user] = await authService.loginUser(email, password);

        if (!user) {
            res.status(401).json({
                message: "No user with that email"
            })
        }
        else {
            res.status(201).json({
                message: "Login succesful"
            })
        }
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const update = async (req, res) => {
    const { email, username, first_name, last_name } = req.body;

    try {
        const [user] = await authService.getUser(email);

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