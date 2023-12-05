import compradorPersistence from "../persistence/compradorPersistence.js";

async function getTodosCompradores(req, res){
    // regra de negócio
    // chama persistência
    
    return await compradorPersistence.getTodosCompradores()
}

async function getUmComprador(id){
    // regra de negócio
    // chama persistência
    
    return await compradorPersistence.getUmComprador(id)
}

async function criarComprador(id, nome){
    
    var resultado = await compradorPersistence.criarComprador(id, nome)
    return resultado
}

async function excluirComprador(id){
    // regra de negócio
    // chama persistência
    
    return await compradorPersistence.excluirComprador(id)
}


async function alterarComprador(idnew, nome, idold){
    
    var resultado = await compradorPersistence.alterarComprador(idnew, nome, idold)
    return resultado
}



export default { getTodosCompradores, getUmComprador, criarComprador, excluirComprador, alterarComprador }