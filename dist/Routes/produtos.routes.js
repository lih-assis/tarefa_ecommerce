"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const produtos_controllers_1 = require("../Controllers/produtos.controllers");
const rotaProdutos = (0, express_1.Router)();
rotaProdutos.get('/', produtos_controllers_1.listarProdutos); //read
rotaProdutos.get('/:id', produtos_controllers_1.localizarPorId); // read
rotaProdutos.post('/', produtos_controllers_1.adicionarProduto); // creat
rotaProdutos.put('/:id', produtos_controllers_1.atualizarProduto); // update
rotaProdutos.patch; // atualizar informações parciais
rotaProdutos.delete; // delete
exports.default = rotaProdutos;
