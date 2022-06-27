import * as authService from '../services/auth.service.js';

export const register = async (req, res) => {
    const { email, username, password, first_name, last_name } = req.body;

    try {
        await authService.createUser(email, username, password, first_name, last_name)
        res.status(200).json({
            message: "You are successfully registred."
        })
    }
    catch (error) {
        res.status(400).json({
            message: "Error"
        })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [user] = await authService.loginUser(email, password);

        if (!user) {
            res.status(400).json({
                message: "No user with that email"
            })
        }
        else {
            res.status(200).json({
                message: "Login succesful"
            })
        }
    }
    catch (error) {
        res.status(400).json({
            message: "Error"
        })
    }
}

export const update = async (req, res) => {
    const { email, username, first_name, last_name } = req.body;

    try {
        const [user] = await authService.getUser(email);

        if (!user) {
            res.status(400).json({
                message: "No user with that email!"
            })
        }
        else {
            await authService.updateUser(email, username, first_name, last_name)
            res.status(200).json({
                message: "Update complete."
            })
        }
    }
    catch (error) {
        res.status(400).json({
            message: "Error"
        })
    }
}

export const updatePassword = async (req, res) => {

}