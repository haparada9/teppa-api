import express from "express";
import db from "./config/dbConnect.js";
import candidatos from "./models/Candidato.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão!"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso!");
});

const app = express();

app.use(express.json());

routes(app);
//const candidatos = [
//  { id: 1, nome: "Hugo Parada" },
// { id: 2, nome: "Paula Dentino" },
//];

app.get("/candidatos", (req, res) => {
  candidatos.find((err, candidatos) => {
    res.status(200).json(candidatos);
  });
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
