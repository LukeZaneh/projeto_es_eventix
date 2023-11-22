import express from 'express'
import eventoController from '../controllers/eventoController.js'

const router = express.Router()


router.get('', eventoController.getTodosEventos)
router.get('/:id', eventoController.getUmEvento)
router.post('', eventoController.criarEvento)
router.delete('/:id', eventoController.excluirEvento)
router.put('/:id', eventoController.alterarEvento)

export default router;