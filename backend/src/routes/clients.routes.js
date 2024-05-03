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

router.delete('/deleted/:id', authRequired, deleteUsers)
router.post('/new', authRequired, createUser)
router.put('/update/:id', authRequired, updateUser)

export default router
