//importando biblioteca express
const express = require('express')
const app = express()
const PORT = 3000

//função do express que ficar ouvindo na porta que configuramos
app.listen(PORT, () => {
    console.log(`Ola mundo, estou funcionando na porta ${PORT}`)
})