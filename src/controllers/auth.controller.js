import * as authService from '../services/auth.service.js';

export const register = async (req, res) => {
    const { email, username, password, first_name, last_name } = req.body;

    try {
        await authService.createUser(email, username, password, first_name, last_name);

        res.status(200).json({ message: "You are successfully registred." })
    }
    catch (error) {
        res.status(400).json({ message: "Error" })
    }
}

export const login = (req, res) => {

    await authService.loginUser(emailOrUsername, password);
}