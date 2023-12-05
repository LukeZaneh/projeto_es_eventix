import express from 'express'
import compradorController from '../controllers/compradorController.js'

const router = express.Router()


router.get('', compradorController.getTodosCompradores)
router.get('/:id', compradorController.getUmComprador)
router.post('', compradorController.criarComprador)
router.delete('/:id', compradorController.excluirComprador)
router.put('/:id', compradorController.alterarComprador)

export default router;