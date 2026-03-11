// importações de bibliotecas e configurações básicas
const http = require("http");
const porta = 3000;
const express = require("express"); // Linha adicionada
const app = express(); // Linha adicionada
const morgan = require("morgan");

// configurações iniciais do morgan
app.use(morgan("dev"));
app.use()


app.use
app.get("/", (req, res) => {
  res.send("rota raiz");
});


// Coloca o servidor no ar
//Serve.listen(porta, () => {
 app.listen(porta, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});


