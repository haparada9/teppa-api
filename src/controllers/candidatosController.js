import candidatos from "../models/Candidato.js"

class CandidatoController {

    static listarCandidatos = (req, res) => {
        candidatos.find((err, candidatos) => {
            res.status(200).json(candidatos);
        })
    }

    static cadastrarCandidato = (req,res) => {
        let candidato = new candidatos(req.body)

        candidato.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar candidato!`})
            } else{
                res.status(201).send(candidato.toJSON())
            }
        })

    }


}

export default CandidatoController;