"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atualizarProduto = exports.adicionarProduto = exports.localizarPorId = exports.listarProdutos = exports.produtos = void 0;
exports.produtos = [];
function listarProdutos(request, response) {
    return response.json(exports.produtos);
}
exports.listarProdutos = listarProdutos;
function localizarPorId(request, response) {
    const parametros = request.params;
    const produtoEspecifico = exports.produtos.find(produto => produto.id === parametros.id);
    if (!produtoEspecifico) {
        return response.status(404).send("Ocorreu um erro.");
    }
    return response.json(produtoEspecifico);
}
exports.localizarPorId = localizarPorId;
function adicionarProduto(request, response) {
    const addProduto = request.body;
    exports.produtos.push(addProduto);
    return response.json(addProduto);
}
exports.adicionarProduto = adicionarProduto;
function atualizarProduto(request, response) {
    const { id } = request.params;
    const produtoIndex = exports.produtos.findIndex((p) => p.id === id);
    exports.produtos[produtoIndex].nome = request.body.nome;
    exports.produtos[produtoIndex].status = request.body.status;
    exports.produtos[produtoIndex].preco = request.body.preço;
    response.json(exports.produtos[produtoIndex]);
}
exports.atualizarProduto = atualizarProduto;
/*export function deletarProduto*/ 
