const http = require('http')
const url = require('url')
const {soma, subtracao,multiplicacao,divisao} = require('./teste')

const PORT = 8000

//criar servidor
const server = http.createServer((req, res) =>{
    const urlCapturada = url.parse(req.url, true)
    console.log(urlCapturada)
    const {query, pathname} = urlCapturada
    let resultado = 0
    if(pathname== '/soma'){
        resultado = soma(Number(query.a), Number(query.b))
        res.end(`o valor final é ${resultado}`)
    }else if(pathname == '/subtracao'){
        resultado = subtracao(Number(query.a), Number(query.b))
    }else if(pathname == '/divisao'){
        resultado = divisao(Number(query.a), Number(query.b))
   
   }else if(pathname == '/multiplicacao'){
    resultado = multiplicacao(Number(query.a), Number(query.b))
   }else{
    res.statusCode = 404
    res.end('Pagina nao encontrada')
   }
   res.end(`O valor final e ${resultado}`)
}
    )

server.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)
})



