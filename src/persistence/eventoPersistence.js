import BD from './BD.js'


async function getTodosEventos(req, res){
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("SELECT * FROM evento;");
        console.log(query.rows)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function getUmEvento(id){
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("SELECT * FROM evento WHERE id=$1", [id]);
        console.log(query.rows)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function criarEvento(id, nome, data, local, horario){
    // conectar no BD
    // executar operação SQL

    var resultado = null

    const conn = await BD.conectar();
    try{
        var query = await conn.query
        ("INSERT INTO evento (id, nome, data, local, horario) VALUES ($1, $2, $3, $4, $5) returning *", [id, nome, data, local, horario]);
        console.log(query)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function excluirEvento(id){
    // conectar no BD
    // executar operação SQL

    var resultado = null;
    const conn = await BD.conectar();
    try{
        var query = await conn.query("DELETE FROM evento WHERE id=$1 returning *", [id]);
        console.log(query.rows)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}

async function alterarEvento(idnew, nome, data, local, horario, idold){
    // conectar no BD
    // executar operação SQL

    var resultado = null
    console.log(idnew + nome + data + local + horario + idold)

    const conn = await BD.conectar();
    try{
        let consulta = "UPDATE evento SET id=$1, nome=$2, data=$3, local=$4, horario=$5 WHERE id=$6 returning *"
        var query = await conn.query( consulta, [idnew, nome, data, local, horario, idold]);
        console.log(query)
        resultado = query.rows
    } catch(err) {
        console.log(err)
    } finally {
        conn.release()
    }

    return resultado
}
export default { criarEvento, getUmEvento, getTodosEventos, excluirEvento, alterarEvento }