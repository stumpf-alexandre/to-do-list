//importando biblioteca express
const express = require('express')
const app = express()
const PORT = 3000

//configurando com verbos HTTP (GET, POST, DELETE, PUT)
app.get('/', (req, res) => {
    res.send("Ola get")
})
app.post('/', (req, res) => {
    res.send("Ola post")

})
app.delete('/', (req, res) => {
    res.send("Ola delete")
})
app.put('/', (req, res) => {
    res.send("Ola put")
})

//função do express que ficar ouvindo na porta que configuramos
app.listen(PORT, () => {
    console.log(`Ola mundo, estou funcionando na porta ${PORT}`)
})