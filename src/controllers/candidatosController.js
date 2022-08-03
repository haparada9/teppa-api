import candidatos from "../models/Candidato.js"

class CandidatoController {

    static listarCandidatos = (req, res) => {
        candidatos.find((err, candidatos) => {
            res.status(200).json(candidatos);
        })
    }
}

export default CandidatoController;