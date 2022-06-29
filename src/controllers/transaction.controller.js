import * as transactionService from "../services/transaction.service.js"

export const createTransaction = async (req, res) => {

    try {
        await transactionService.createTransaction()
        res.status(201).json({
            message: "Transaction is created."
        })
    }
    catch (error) {
        res.status(401).json({
            message: "Error!"
        })
    }
}