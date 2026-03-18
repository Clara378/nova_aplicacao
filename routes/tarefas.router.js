const express = require ("express");
const tarefaController = require ("./");


router.get("/", tarefasController.mostrarTarefas);

module.exports=Router;