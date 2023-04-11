const express = require("express")
const router = express.Router()

const upload = require("../config/multer")

const PictureController = require("../controllers/pictureController")

/**Abaixo chamo o middleware e passo o tipo de input que ele vai escutar,
 *  antes do controller ser chamado */
router.post("/", upload.single("file"), PictureController.create);
router.get("/", PictureController.findAll);
router.delete("/:id", PictureController.remove);

module.exports = router

