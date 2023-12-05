import BD from './BD.js'


async function getTodosCompradores(req, res){
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("SELECT * FROM comprador;");
        console.log(query.rows)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function getUmComprador(id){
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("SELECT * FROM comprador WHERE id=$1", [id]);
        console.log(query.rows)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function criarComprador(id, nome){
    // conectar no BD
    // executar operação SQL

    var resultado = null

    const conn = await BD.conectar();
    try{
        var query = await conn.query
        ("INSERT INTO comprador (id, nome) VALUES ($1, $2) returning *", [id, nome]);
        console.log(query)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function excluirComprador(id){
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("DELETE FROM comprador WHERE id=$1 returning *", [id]);
        console.log(query.rows)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function alterarComprador(idnew, nome, idold){
    // conectar no BD
    // executar operação SQL

    var resultado = null
    console.log(idnew + nome + idold)

    const conn = await BD.conectar();
    try{
        let consulta = "UPDATE comprador SET id=$1, nome=$2 WHERE id=$3 returning *"
        var query = await conn.query( consulta, [idnew, nome, idold]);
        console.log(query)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}
export default { criarComprador, getUmComprador, getTodosCompradores, excluirComprador, alterarComprador }