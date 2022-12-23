"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rotaCarrinho = (0, express_1.Router)();
const produtosNoCarrinho = [];
rotaCarrinho.get('/produtos', (request, response) => {
    return response.json(produtosNoCarrinho);
});
/*rotaCarrinho.post('./produtos', (request, response) => {
    const addProduto = request.body;
    produtos.push(addProduto)
    return response.json(addProduto)
})

rota.put*/
exports.default = rotaCarrinho;
