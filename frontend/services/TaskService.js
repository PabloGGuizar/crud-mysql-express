export class TaskService {
    constructor () {
        this.URI = 'http://localhost:3000/api/tasks';
    }

    async getTasks() {
        try {
            const response = await fetch(this.URI);
            const tasks = await response.json();
            return tasks;
        } catch (err) {
            console.log(err);
        }
    }

    async getOneTask(taskId) {
        try {
            const response = await fetch(`${this.URI}/${taskId}`, {
                method: 'GET'
            });
            const task = await response.json();
            return task[0];
        } catch (err) {
            console.log(err);
        }
    }

    async postTask(task) {
        try {
            const response = await fetch(this.URI, {
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(task)
            });
            const newTask = await response.json();
            return newTask;
        } catch(err) {
            console.log(err);
        }
    }

    async updateTask(taskId, task) {
        try {
            const response = await fetch(`${this.URI}/${taskId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify(task)
            });
            const taskUpdated = response.json();
            return taskUpdated;
        } catch (err) {
            console.log(err)
        }
    }

    async deleteTask(taskId) {
        try {
            const response = await fetch(`${this.URI}/${taskId}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            });
            const taskDeleted = response.json();
            return taskDeleted;
        } catch(err) {
            console.log(err);
        }
    }
}