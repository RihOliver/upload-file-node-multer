const Picture = require("../models/Picture")

const fs = require("fs")

exports.create = async (req, res) => {
    try {
        const {name} = req.body
        const file = req.file

        /**Criar uma instancia do model Picture e passando os dados para ele */
        const picture = new Picture({
            name, 
            src: file.path
        })

        await picture.save()

        res.json({picture, msg: "Imagem salva com sucesso"})
        
    } catch (error) {
        res.status(500).json({message: "Erro ao salvar imagem"})
    }
}

exports.findAll = async (req, res) => {
    try {
        const pictures = await Picture.find()
        res.json(pictures)
    } catch (error) {
        res.status(500).json({message: "Erro ao buscar imagens."})    
    }
}


exports.remove = async (req, res) => {
    try {
        const picture = await Picture.findById(req.params.id);
        if (!picture) {
            return res.status(404).json({msg: "imagem não encontrada"});
        }
        console.log(picture)
        /**Essa remove o arquivo */
        fs.unlinkSync(picture.src);

        /**Essa remove o registro do banco */
        await Picture.deleteOne({_id: req.params.id});

        res.json({message: "Imagem removida com sucesso"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erro ao excluir imagem"});
    }
}
