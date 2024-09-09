import { Router } from "express"
import { listTasks, createTask } from "../services/task.js"

const router = Router()

//configurando com metodos HTTP (GET, POST, DELETE, PUT)
router.get('/', (req, res) => {
    res.send("Ola Mundo GET")
})
router.post('/', (req, res) => {
    res.send("Ola Mundo POST")
})
router.delete('/', (req, res) => {
    res.send("Ola Mundo DELETE")
})
router.patch('/', (req, res) => {
    res.send("Ola Mundo PATCH")
})

export default router