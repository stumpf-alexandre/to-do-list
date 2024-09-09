let tasks = []

//função para listar tarefas
export const listTasks = () => {
    return tasks
}

//função para criar tarefa
export const createTask = (task) => {
    tasks.push(task)
}