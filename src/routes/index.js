import express from "express";
import candidatos from "./candidatosRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Candidatos para vaga de desenvolvedor!"})
    })

app.use(
    express.json(),
    candidatos
)
}

export default routes;