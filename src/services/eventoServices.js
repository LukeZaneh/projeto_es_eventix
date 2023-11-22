import eventoPersistence from "../persistence/eventoPersistence.js";

async function getTodosEventos(req, res){
    // regra de negócio
    // chama persistência
    
    return await eventoPersistence.getTodosEventos()
}

async function getUmEvento(id){
    // regra de negócio
    // chama persistência
    
    return await eventoPersistence.getUmEvento(id)
}

async function criarEvento(id, nome, data, local, horario){
    
    var resultado = await eventoPersistence.criarEvento(id, nome, data, local, horario)
    return resultado
}

async function excluirEvento(id){
    // regra de negócio
    // chama persistência
    
    return await eventoPersistence.excluirEvento(id)
}


async function alterarEvento(idnew, nome, data, local, horario, idold){
    
    var resultado = await eventoPersistence.alterarEvento(idnew, nome, data, local, horario, idold)
    return resultado
}



export default { getTodosEventos, getUmEvento, criarEvento, excluirEvento, alterarEvento }