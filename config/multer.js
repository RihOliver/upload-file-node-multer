const multer = require("multer")

/**Pacote do node para dar acesso as pastas do projeto */
const path = require("path")

/**Configuração de como vai salvar os arquivos */
const storage = multer.diskStorage({
    /**Qual lugar o arquivo será salvo */
    destination: function(req, file, cb){
        cb(null, "uploads/")
    },

    /**Como ficará o nome do arquivo */
    filename: function (req, file, cb) {
        /**Renomeando para data mais o nome da extensão do arquivo (png, jpg e etc..) */
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

/**Variavel invocando o multer e passando storage como argumento */
const upload = multer({storage});

module.exports = upload;