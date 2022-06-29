import * as cartService from "../services/cart.service.js"

export const createCart = async (req, res) => {
    const { game_id, user_id, transaction_id, price } = req.body

    try {
        await cartService.addCart(game_id, user_id, transaction_id, price)
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