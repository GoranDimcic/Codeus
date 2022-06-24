import express from "express"
import authRouter from "./routes/auth.route.js"
import bodyParser from 'body-parser'
import 'dotenv/config'

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use("/auth", authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})