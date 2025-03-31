const http = require('http')
const {soma} = require('./teste')

const PORT = 8000

//criar servidor
const server = http.createServer((req, res) =>{
    let valores = req.url
        .replace('/', '')
        .replace('?', '')
        .split('&')
    let parametros ={}
    for (item in valores) {
        let chaveValor = valores[item].split('=')
        parametros[chaveValor[0]] = Number(chaveValor[1])
    }
    let resultado = soma(parametros.a,parametros.b)
    res.end(`o valor final é ${resultado}`)
})

server.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)
})



