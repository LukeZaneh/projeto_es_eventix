import vendedorServices from '../services/vendedorServices.js'

async function getTodosVendedores(req, res){
    // capturar os dados
    // validar os dados
    // chamar camada de serviços

    const resultado = await vendedorServices.getTodosVendedores()
    res.send(JSON.stringify(resultado))
}

async function criarVendedor(req, res){
    const id = req.body.id
    const nome = req.body.nome

    //validação dos dados

    //chamada para o controller
    const resultado = await vendedorServices.criarVendedor(id, nome)

    //retornar para o usuário final
    res.send(resultado)
}
async function getUmVendedor(req, res) {
    const id = req.params.id

    var resultado = null

    if(idValido(id)) {

        //chamar camada de serviço
        resultado = await vendedorServices.getUmVendedor(id)
    }

    res.send(resultado)
}

function idValido(id) {
    return true
}

async function excluirVendedor(req, res) {
    const id = req.params.id
    var resultado = null

    if(idValido(id)) {

        //chamar camada de serviço
        resultado = await vendedorServices.excluirVendedor(id)
    }

    res.send(resultado)
}

async function alterarVendedor(req, res){
    const idold = req.params.id
    const idnew = req.body.id
    const nome = req.body.nome
    
    //validação dos dados

    //chamada para o controller
    const resultado = await vendedorServices.alterarVendedor(idnew, nome, idold)

    //retornar para o usuário final
    res.send(resultado)
}


export default { getTodosVendedores, getUmVendedor, criarVendedor, excluirVendedor, alterarVendedor }