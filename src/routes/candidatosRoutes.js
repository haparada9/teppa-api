import express from "express";
import CandidatoController from "../controllers/candidatosController.js"

const router = express.Router();

router
    .get("/candidatos", CandidatoController.listarCandidatos)

    export default router;