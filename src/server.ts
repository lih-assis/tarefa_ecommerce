import express from "express"
import rota from "./Routes"

const server = express()
const porta = 2707

server.use(express.json())

server.use(rota)

server.listen(porta, () =>{
    console.log("O servidor esta rodando na porta:", porta)
})