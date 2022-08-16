import * as cartService from "../services/cart.service.js"
import * as transactionService from "../services/transaction.service.js"

export const GamesFromCart = async (req, res) => {
    try {
        const games = await cartService.getGamesFromCart(req.id)
        res.status(201).json({
            data: games
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error"
        })
    }
}

export const AddGameToCart = async (req, res) => {
    const { gameId, price } = req.body

    try {
        await cartService.addToCart(req.id, gameId, price)
        res.status(201).json({
            message: "Cart is created."
        })
    }
    catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Error!"
        })
    }
}

export const RemoveGameFromCart = async (req, res) => {
    const { id } = req.params
    const cart = await cartService.getGameFromCart(req.id, id)

    if (!cart.length) {
        res.status(400).json({
            message: "Game is not in cart!"
        })
    }
    else {
        try {
            await cartService.deleteFromCart(req.id, id)
            res.status(201).json({
                message: "Game is removed from the cart!"
            })
        }
        catch (error) {
            console.log(error)
            res.status(401).json({
                message: "Error!"
            })
        }
    }
}

export const Checkout = async (req, res) => {
    try {
        const transactionId = await transactionService.createTransaction()

        await cartService.updateCart(req.id, transactionId)
        res.status(201).json({
            message: "Checkout for the game is done!"
        })
    }
    catch (error) {
        console.log(error)
        res.status(401).json({
            message: "Error!"
        })
    }
}