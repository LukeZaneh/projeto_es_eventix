import vendedorPersistence from "../persistence/vendedorPersistence.js";

async function getTodosVendedores(req, res){
    // regra de negócio
    // chama persistência
    
    return await vendedorPersistence.getTodosVendedores()
}

async function getUmVendedor(id){
    // regra de negócio
    // chama persistência
    
    return await vendedorPersistence.getUmVendedor(id)
}

async function criarVendedor(id, nome){
    
    var resultado = await vendedorPersistence.criarVendedor(id, nome)
    return resultado
}

async function excluirVendedor(id){
    // regra de negócio
    // chama persistência
    
    return await vendedorPersistence.excluirVendedor(id)
}


async function alterarVendedor(idnew, nome, idold){
    
    var resultado = await vendedorPersistence.alterarVendedor(idnew, nome, idold)
    return resultado
}



export default { getTodosVendedores, getUmVendedor, criarVendedor, excluirVendedor, alterarVendedor }