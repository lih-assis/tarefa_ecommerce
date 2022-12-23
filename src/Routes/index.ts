import { Router } from 'express'
import rotaProdutos from './produtos.routes'
import rotaCarrinho from './carrinho.routes'

const rota = Router()

rota.use('/produtos', rotaProdutos )
rota.use('/carrinhodecompras', rotaCarrinho)

export default rota