import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middlewares.js'
import {
  createClientSchema,
  deleteClientSchema,
  getClientSchema,
  getClientsSchema
} from '../validators/client.schema.js'

import {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUsers
} from '../controllers/clients.controller.js'

const router = Router()

router.get(
  '/query',
  authRequired,
  validateSchema(getClientsSchema),
  getAllUsers
)
router.get(
  '/query/:id',
  authRequired,
  validateSchema(getClientSchema),
  getOneUser
)

router.delete(
  '/query/:id',
  authRequired,
  validateSchema(deleteClientSchema),
  deleteUsers
)

router.post(
  '/query',
  authRequired,
  validateSchema(createClientSchema),
  createUser
)

router.put(
  '/query/:id',
  authRequired,
  updateUser
)

export default router
