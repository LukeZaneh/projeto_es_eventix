import pg from 'pg'

async function conectar() {
    const pool = new pg.Pool({
        connectionString: "postgres://scsmbolg:9NOmbbm9QCCwPCnrViyQczFkBe_In-Af@isabelle.db.elephantsql.com/scsmbolg"
    })

    return pool.connect();
}

export default { conectar }