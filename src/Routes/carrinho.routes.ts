import { Router } from 'express'

const rotaCarrinho = Router()


const produtosNoCarrinho : any[] = []


rotaCarrinho.get('/produtos',(request, response) => {
    return response.json(produtosNoCarrinho)
})

/*rotaCarrinho.post('./produtos', (request, response) => {
    const addProduto = request.body;
    produtos.push(addProduto)
    return response.json(addProduto)
})

rota.put*/

export default rotaCarrinho