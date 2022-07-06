import * as cartService from "../services/cart.service.js"
import * as transactionService from "../services/transaction.service.js"

export const addToCart = async (req, res) => {
    const { game_id, price } = req.body

    try {
        await cartService.createCart(req.user_id, game_id, price)
        res.status(201).json({
            message: "Cart is created."
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error!"
        })
    }
}

export const chechout = async (req, res) => {
    try {
        const transaction_id = await transactionService.createTransaction()

        await cartService.updateCart(req.user_id, transaction_id)
        res.status(201).json({
            message: "Chechout for the game is done!"
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error!"
        })
    }
}

export const removeFromCart = async (req, res) => {
    const { game_id } = req.body

    try {
        await cartService.deleteFromCart(req.user_id, game_id)
        res.status(201).json({
            message: "Game is removed from the cart!"
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error!"
        })
    }
}