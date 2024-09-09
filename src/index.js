//importando biblioteca express
import express from 'express'
import taskControllers from './controllers/task.js'
const app = express()
const PORT = 3000

app.use('/task', taskControllers)

//função do express que ficar ouvindo na porta que configuramos
app.listen(PORT)