import express from "express"
import authRouter from "./routes/auth.route.js"
import gameRouter from "./routes/games.route.js"
import ratingRouter from "./routes/rating.route.js"
import favoriteRouter from "./routes/favorite.route.js"
import commentRouter from "./routes/comment.route.js"
import transactionRouter from "./routes/transaction.route.js"
import cartRouter from "./routes/cart.route.js"
import searchRouter from "./routes/search.routre.js"
import browseRouter from "./routes/browser.route.js"
import bodyParser from 'body-parser'
import 'dotenv/config'
import cors from 'cors'

const { API_PORT } = process.env
const app = express()
const port = process.env.port || API_PORT

var corsOptions = {
  origin: '*',
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use("/auth", authRouter)
app.use("/game", gameRouter)
app.use("/rating", ratingRouter)
app.use("/favorite", favoriteRouter)
app.use("/comment", commentRouter)
app.use("/transaction", transactionRouter)
app.use("/cart", cartRouter)
app.use("/browse", browseRouter)
app.use("/search", searchRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})