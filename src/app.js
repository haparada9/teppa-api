import express from "express";
import db from "./config/dbConnect.js"

db.on("error", console.log.bind(console, 'Erro de conexão!'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso!')
})

const app = express();

app.use(express.json());

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

app.get("/candidatos/:id", (req, res) => {
  let index = buscaCandidato(req.params.id);
  res.json(candidatos[index]);
});

app.post("/candidatos", (req, res) => {
  candidatos.push(req.body);
  res.status(201).send("Candidato cadastrado com sucesso!");
});

app.put("/candidatos/:id", (req, res) => {
  let index = buscaCandidato(req.params.id);
  candidatos[index].nome = req.body.nome;
  res.json(candidatos);
});

app.delete("/candidatos/:id", (req, res) => {
  let { id } = req.params;
  let index = buscaCandidato(id);
  candidatos.splice(index, 1);
  res.send(`Candidato ${id} removido com sucesso!`);
});

function buscaCandidato(id) {
  return candidatos.findIndex((candidato) => candidato.id == id);
}

export default app;
