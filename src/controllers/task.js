import { Router } from "express"
import { listTasks, createTask } from "../services/task.js"

const router = Router()

//configurando com metodos HTTP (GET, POST, DELETE, PUT)
router.get('/', async (req, res) => {
    const tasksList = await listTasks()
    res.status(200).send(tasksList)
})
router.post('/', async (req, res) => {
    const task = await createTask(req.body)
    res.status(201).send(task)
})
router.delete('/', (req, res) => {
    res.send("Ola Mundo DELETE")
})
router.patch('/', (req, res) => {
    res.send("Ola Mundo PATCH")
})

export default router