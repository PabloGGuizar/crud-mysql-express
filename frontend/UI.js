import { TaskService } from './services/TaskService.js';
import { timeago } from './timeagoEsp';

const taskService = new TaskService();

export class UI {
    constructor() {}

    async renderTasks() {
        const tasks = await taskService.getTasks();
        const container = document.getElementById('tasks');
        container.innerHTML = '';
        const taskContainer = document.createElement('div');
        const taskCompletedContainer = document.createElement('div');
        tasks.forEach(task => {
            let content = task.completa == 1 ? taskCompletedContainer : taskContainer;
            content.innerHTML += `
                <div id="${task.id}" class="card mb-3" style="max-width: 36rem; width: 100%;">
                    <div class="card-body ${task.completa == 1 ? 'text-decoration-line-through' : ''}">
                        <h5 class="card-title">${task.tarea}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Tarea creada: ${timeago(task.fecha)}</h6>
                        <p class="card-text">${task.descripcion}</p>
                    </div>
                    <div class="card-body">
                        <p class="text-end">
                            <button class="btn-edit btn btn-secondary">Editar</button>
                            <button class="btn-delete btn btn-danger">Eliminar</button>
                        </p>
                        <div class="form-check form-check-reverse">
                            <label class="form-check-label" for="completar">
                                Completar tarea
                            </label>
                            <input class="form-check-input" type="checkbox" value="1" id="completar" ${task.completa == 1 ? 'checked' : ''}>
                        </div>
                    </div>
                </div>
            `;
        });
        container.appendChild(taskContainer);
        container.appendChild(taskCompletedContainer);
    }

    async addTask(task) {
        const response = await taskService.postTask(task);
        this.showAlert(response.mensaje, 'success', 1500)
        this.renderTasks();
        document.getElementById("task-form").reset();
        document.getElementById("title").focus();
    }

    async findOneTask(taskId) {
        const taskFound = await taskService.getOneTask(taskId);
        document.getElementById('id').value = taskFound.id;
        document.getElementById('title').value = taskFound.tarea;
        document.getElementById('description').value = taskFound.descripcion;
        document.getElementById('estado').value = taskFound.completa;
    }

    async editTask(taskId, task) {
        const response = await taskService.updateTask(taskId, task);
        this.showAlert(response.mensaje, 'warning', 1500);
        this.renderTasks();
        document.getElementById("task-form").reset();
        document.getElementById("title").focus();
    }

    async updateStateTask(taskId, state) {
        const taskFound = await taskService.getOneTask(taskId);
        const taskState = {
            "tarea": taskFound.tarea,
            "descripcion": taskFound.descripcion,
            "completa": state
        }
        const response = await taskService.updateTask(taskId, taskState);
        this.showAlert(response.mensaje, 'warning', 1500);
        this.renderTasks();
    }

    async deleteTask(taskId) {
        const response = await taskService.deleteTask(taskId);
        this.showAlert(response.mensaje, 'danger', 1500)
        this.renderTasks();
    }

    showAlert(message, color, seconds) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${color} m-3 text-center`;
        alert.style = "width: 18rem;"
        alert.textContent = message;
        const container = document.getElementById('message-container');
        window.scrollTo(0, 0);
        container.appendChild(alert);
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, seconds)
    }

}