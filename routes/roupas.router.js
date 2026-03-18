const express = require ("express");
const tarefaController = require ("../tarefa.Controller");

router.get("/", tarefaController.mostrarTarefas);
router.get("/", tarefaController.crieSuatarefa);
router.get("/", tarefaController. alterarTarefa);
router.get("/", tarefaController.deletarTarefa);

module.exports=Router;