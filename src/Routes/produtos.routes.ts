import { Router } from 'express'
import { listarProdutos, localizarPorId, adicionarProduto, atualizarProduto, deletarProduto} from '../Controllers/produtos.controllers'

const rotaProdutos = Router()

rotaProdutos.get('/', listarProdutos) //read

rotaProdutos.get('/:id', localizarPorId) // read

rotaProdutos.post('/', adicionarProduto) // creat

rotaProdutos.put('/:id', atualizarProduto) // update

rotaProdutos.delete('/:id', deletarProduto)  // delete

export default rotaProdutos