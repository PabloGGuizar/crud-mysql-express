require('./styles/style.css');

import { UI } from "./UI.js";

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.renderTasks();
});

const taskForm = document.getElementById('task-form');

taskForm.addEventListener('submit', e => {
  e.preventDefault();
  const id = document.getElementById('id');
  const tarea = document.getElementById('title').value;
  const descripcion = document.getElementById('description').value;
  const completa = document.getElementById('estado').value; 

  const nuevaTarea = { 
    tarea,
    descripcion,
    completa
  }

  const ui = new UI();
  if (id.value > 0) {
    ui.editTask(id.value, nuevaTarea);
    id.value = 0;
  } else {
    ui.addTask(nuevaTarea);
  }
  
});

const taskContainer = document.getElementById('tasks');
taskContainer.addEventListener('click', e => {
  const ui = new UI();
  const taskId = e.target.parentElement.parentElement.parentElement.id;
  if (e.target.className.includes('btn-delete')) {
    ui.deleteTask(taskId);
  } else if (e.target.className.includes('btn-edit')) {
    ui.findOneTask(taskId);
    ui.showAlert('Editando tarea', 'info', 1500)
  } else if (e.target.id = 'completar') {
    if (e.target.checked == true) {
      ui.updateStateTask(taskId, 1)
    } else {
      ui.updateStateTask(taskId, 0)
    }
  }
});