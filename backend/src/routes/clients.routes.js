import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUsers
} from '../controllers/clients.controller.js'

const router = Router()

router.get('/query', authRequired, getAllUsers)
router.get('/query/:id', authRequired, getOneUser)

router.delete('/query/:id', authRequired, deleteUsers)
router.post('/query', authRequired, createUser)
router.put('/query/:id', authRequired, updateUser)

export default router
