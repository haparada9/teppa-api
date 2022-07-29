import express from "express";

const app = express();

app.use(express.json())

const candidatos = [
  { id: 1, nome: "Hugo Parada" },
  { id: 2, nome: "Paula Dentino" },
];

app.get("/", (req, res) => {
  res.status(200).send("Candidato para vaga dev jr");
});

app.get("/candidatos", (req, res) => {
  res.status(200).json(candidatos);
});

app.post('/candidatos', (req, res) => {
    candidatos.push(req.body)
    res.status(201).send('Candidato cadastrado com sucesso!')
})




export default app;
