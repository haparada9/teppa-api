import mongoose from "mongoose"

mongoose.connect("mongodb+srv://haparada:Hbomfulxxnnh9y@cluster0.tuyddz0.mongodb.net/teppa-dev");

let db = mongoose.connection;

export default db;