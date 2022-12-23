import { Request, Response } from "express"
export let produtos : any[] = []

export function listarProdutos (request: Request, response : Response) {
    return response.json(produtos)
}

export function localizarPorId (request: Request, response : Response) {
    const parametros = request.params
    const produtoEspecifico = produtos.find(produto => produto.id === parametros.id)

    if(!produtoEspecifico) {
        return response.status(404).send("Ocorreu um erro.")
    }

    return response.json(produtoEspecifico)
}

export function adicionarProduto (request: Request, response : Response) {
    const addProduto = request.body;
    produtos.push(addProduto)
    return response.json(addProduto)
}

export function atualizarProduto (request: Request, response : Response) {
    const { id }= request.params
    const produtoIndex = produtos.findIndex((p)=>p.id === id)

    if (produtoIndex === -1) {
        return response.send('Não encontramos este produto');
      }

    produtos[produtoIndex].nome = request.body.nome
    produtos[produtoIndex].status = request.body.status
    produtos[produtoIndex].preco = request.body.preço

    return response.json(produtos[produtoIndex])
}

export function deletarProduto (request: Request, response : Response) {
    const { id }= request.params
    produtos = produtos.filter((p) => p.id !== id)
    return response.json("Produto foi deletado")
}