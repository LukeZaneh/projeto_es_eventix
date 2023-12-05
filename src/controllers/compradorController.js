import compradorServices from '../services/compradorServices.js'

async function getTodosCompradores(req, res){
    // capturar os dados
    // validar os dados
    // chamar camada de serviços

    const resultado = await compradorServices.getTodosCompradores()
    res.send(JSON.stringify(resultado))
}

async function criarComprador(req, res){
    const id = req.body.id
    const nome = req.body.nome

    //validação dos dados

    //chamada para o controller
    const resultado = await compradorServices.criarComprador(id, nome)

    //retornar para o usuário final
    res.send(resultado)
}
async function getUmComprador(req, res) {
    const id = req.params.id

    var resultado = null

    if(idValido(id)) {

        //chamar camada de serviço
        resultado = await compradorServices.getUmComprador(id)
    }

    res.send(resultado)
}

function idValido(id) {
    return true
}

async function excluirComprador(req, res) {
    const id = req.params.id
    var resultado = null

    if(idValido(id)) {

        //chamar camada de serviço
        resultado = await compradorServices.excluirComprador(id)
    }

    res.send(resultado)
}

async function alterarComprador(req, res){
    const idold = req.params.id
    const idnew = req.body.id
    const nome = req.body.nome
    
    //validação dos dados

    //chamada para o controller
    const resultado = await compradorServices.alterarComprador(idnew, nome, idold)

    //retornar para o usuário final
    res.send(resultado)
}


export default { getTodosCompradores, getUmComprador, criarComprador, excluirComprador, alterarComprador }