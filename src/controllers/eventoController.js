import eventoServices from '../../services/eventoServices.js'

async function getTodosEventos(req, res){
    // capturar os dados
    // validar os dados
    // chamar camada de serviços

    const resultado = await eventoServices.getTodosEventos()
    res.send(JSON.stringify(resultado))
}

async function criarEvento(req, res){
    const id = req.body.id
    const nome = req.body.nome
    const data = req.body.data
    const local = req.body.local
    const horario = req.body.horario

    //validação dos dados

    //chamada para o controller
    const resultado = await eventoServices.criarEvento(id, nome, data, local, horario)

    //retornar para o usuário final
    res.send(resultado)
}
async function getUmEvento(req, res) {
    const id = req.params.id

    var resultado = null

    if(idValido(id)) {

        //chamar camada de serviço
        resultado = await eventoServices.getUmEvento(id)
    }

    res.send(resultado)
}

function idValido(id) {
    return true
}

async function excluirEvento(req, res) {
    const id = req.params.id
    var resultado = null

    if(idValido(id)) {

        //chamar camada de serviço
        resultado = await eventoServices.excluirEvento(id)
    }

    res.send(resultado)
}

async function alterarEvento(req, res){
    const idold = req.params.id
    const idnew = req.body.id
    const nome = req.body.nome
    const data = req.body.data
    const local = req.body.local
    const horario = req.body.horario
    
    //validação dos dados

    //chamada para o controller
    const resultado = await eventoServices.alterarEvento(idnew, nome, data, local, horario, idold)

    //retornar para o usuário final
    res.send(resultado)
}


export default { getTodosEventos, getUmEvento, criarEvento, excluirEvento, alterarEvento }