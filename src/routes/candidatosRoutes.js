import express from "express";
import CandidatoController from "../controllers/candidatosController.js"

const router = express.Router();

router
    .get("/candidatos", CandidatoController.listarCandidatos)
    .get("/candidatos/:id", CandidatoController.listarCandidatoPorId)
    .post("/candidatos", CandidatoController.cadastrarCandidato)
    .put("/candidatos/:id", CandidatoController.atualizarCandidato)
    .delete("/candidatos/:id", CandidatoController.excluirCandidato)


    export default router;