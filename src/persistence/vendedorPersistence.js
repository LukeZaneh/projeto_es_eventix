import BD from './BD.js'


async function getTodosVendedores(req, res){
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("SELECT * FROM vendedor;");
        console.log(query.rows)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function getUmVendedor(id){
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("SELECT * FROM vendedor WHERE id=$1", [id]);
        console.log(query.rows)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function criarVendedor(id, nome){
    // conectar no BD
    // executar operação SQL

    var resultado = null

    const conn = await BD.conectar();
    try{
        var query = await conn.query
        ("INSERT INTO vendedor (id, nome) VALUES ($1, $2) returning *", [id, nome]);
        console.log(query)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function excluirVendedor(id){
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("DELETE FROM vendedor WHERE id=$1 returning *", [id]);
        console.log(query.rows)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function alterarVendedor(idnew, nome, idold){
    // conectar no BD
    // executar operação SQL

    var resultado = null
    console.log(idnew + nome + idold)

    const conn = await BD.conectar();
    try{
        let consulta = "UPDATE vendedor SET id=$1, nome=$2 WHERE id=$3 returning *"
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
export default { criarVendedor, getUmVendedor, getTodosVendedores, excluirVendedor, alterarVendedor }