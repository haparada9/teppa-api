import candidatos from "../models/Candidato.js"

class CandidatoController {

    static listarCandidatos = (req, res) => {
        candidatos.find((err, candidatos) => {
            res.status(200).json(candidatos);
        })
    }

    static listarCandidatoPorId = (req, res) => {
        const id = req.params.id;

        candidatos.findById(id, (err, candidatos) => {
            if(err) {
                res.status(400). send({message: `${err.message} - Id do candidato não localizado!`})
            } else {
                res.status(200).send(candidatos);
            }
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

    static atualizarCandidato = (req, res) => {
        const id = req.params.id;

        candidatos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Candidato atualizado com sucesso!'})
            } else {
                res.status(500).send({message: 'Falha ao atualizar candidato. Id inexistente.'})
            }
        })
    }

    static excluirCandidato = (req, res) => {
        const id = req.params.id;

        candidatos.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Candidato removido com sucesso!'})
            } else {
                res.status(500).send({message: 'Falha ao excluir candidato. Id inexistente.'})
            }
        })
    }

}

export default CandidatoController;