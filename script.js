const express = require('express');
const {soma, subtracao, multiplicacao, divisao} = require('./teste')

const server = express()

const PORT = 8000

server.get('/soma', (req, res) => {
     resultado = soma(req.query.a, req.query.b)
    res.send(`o resultado da soma e: ${resultado}`)
})
server.get('/subtracao', (req, res) => {
    resultado = subtracao(req.query.a, req.query.b)
   res.send(`o resultado da subtracao e: ${resultado}`)
})
server.get('/multiplicacao', (req, res) => {
    resultado = multiplicacao(req.query.a, req.query.b)
   res.send(`o resultado da multiplicacao e: ${resultado}`)
})
server.get('/divisao', (req, res) => {
    resultado = divisao(req.query.a, req.query.b)
   res.send(`o resultado da divisao e: ${resultado}`)
})

const {soma, subtracao,multiplicacao,divisao} = require('./teste')
const path = require('path')



server.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)
})



