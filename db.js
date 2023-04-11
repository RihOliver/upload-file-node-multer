const mongoose = require("mongoose")

require("dotenv").config()


/**As vezes essa config vem falsa e fica dando warning */
mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.1xtllss.mongodb.net/?retryWrites=true&w=majority`)
    console.log("Conectado com sucesso !")
}

main().catch((err) => console.log(err))

module.exports = main;