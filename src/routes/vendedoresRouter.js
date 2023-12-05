import express from 'express'
import vendedorController from '../controllers/vendedorController.js'
const router = express.Router()


router.get('', vendedorController.getTodosVendedores)
router.get('/:id', vendedorController.getUmVendedor)
router.post('', vendedorController.criarVendedor)
router.delete('/:id', vendedorController.excluirVendedor)
router.put('/:id', vendedorController.alterarVendedor)

export default router;