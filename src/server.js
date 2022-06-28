import express from "express"
import authRouter from "./routes/auth.route.js"
import gameRouter from "./routes/games.route.js"
import ratingRouter from "./routes/rating.route.js"
import favoriteRouter from "./routes/favorite.route.js"
import commentRouter from "./routes/comment.route.js"
import bodyParser from 'body-parser'
import 'dotenv/config'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.use("/auth", authRouter)
app.use("/games", gameRouter)
app.use("/rating", ratingRouter)
app.use("/favorite", favoriteRouter)
app.use("/comment", commentRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})