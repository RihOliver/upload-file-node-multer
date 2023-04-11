const express = require("express")
const app = express()

/**Chamo o dotenv */
require("dotenv").config()

/**Chamo o banco */
require("./db")

/**Ele tenta pegar primeiro a porta do dotenv ou ele pega a porta 3000 */
const port = process.env.PORT || 3000;

const pictureRouter = require("./routes/picture")

app.use("/pictures", pictureRouter)

app.listen(port, () => {
    console.log(`O servidor está rodando a porta ${port}`)
})