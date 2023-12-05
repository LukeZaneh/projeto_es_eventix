import express from 'express'
import bodyParser from 'body-parser'
import eventosRouter from './routes/eventosRouter.js'
<<<<<<< HEAD
import compradoresRouter from './routes/compradoresRouter.js'
=======
import  cors from'cors';
>>>>>>> 8bc92c04a65c5bfcca1ea13f150bb2af68809347

const app = express()

app.use(cors());
//converte objeto request no formato JSON
app.use(express.json())

//Faz o Parser dos pacotes recebidos
app.use(bodyParser.urlencoded({extended:true}))

app.use("/eventos", eventosRouter)
app.use("/compradores", compradoresRouter)

app.listen(3000, mensagemServidor)

function mensagemServidor(){
    console.log("servidor está rodando!!!")
}
