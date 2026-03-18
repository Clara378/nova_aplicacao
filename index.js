const http = require("http");
const express = require("express");
const morgan = require("morgan");
const app = express();
require("dotenv").config();

const PORTA = Number(process.env.PORTA || 300);

app.use(morgan("dev"));


app.use(morgan("dev"));
app.set("views", "./views");
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