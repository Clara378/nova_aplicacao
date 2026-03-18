const http = require("http");
const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config();

const PORTA = Number(process.env.PORTA || 3000);


const router = require("./routes/roupas.router")

app.use(morgan("dev"));
app.set("Views", "./Views");
app.set("view engine", "ejs");
app.use(express.static("./public"));


app.use((req, res) => {
  //res.status(404).send("Página não encontrada!");
  res.status(404).render("erro404", { title: "erro 404" });
});


app.listen(PORTA, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + PORTA);
});