import express from 'express'
import bodyParser from 'body-parser'
import eventosRouter from './routes/eventosRouter.js'

const app = express()

//converte objeto request no formato JSON
app.use(express.json())

//Faz o Parser dos pacotes recebidos
app.use(bodyParser.urlencoded({extended:true}))

app.use("/eventos", eventosRouter)

app.listen(3000, mensagemServidor)

function mensagemServidor(){
    console.log("servidor está rodando!!!")
}
