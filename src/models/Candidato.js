import mongoose from "mongoose";

const candidatoSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, required: true },
  cpf: { type: Number, required: true },
  email: { type: String, required: true },
  vaga: { type: String, required: true },
  genero: { type: String },
});

const candidatos = mongoose.model("candidatos", candidatoSchema);

export default candidatos;
