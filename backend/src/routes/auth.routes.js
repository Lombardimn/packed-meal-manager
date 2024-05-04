import { Router } from 'express'
import { register, login, logout, profile } from '../controllers/auth.controller.js'

import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middlewares.js'
import { registerSchema, loginSchema } from '../validators/auth.schema.js'

const router = Router()

router.post(
  '/register',
  validateSchema(registerSchema),
  register
)

router.post(
  '/login',
  validateSchema(loginSchema),
  login
)

router.get(
  '/profile',
  authRequired,
  profile
)

router.post(
  '/logout',
  logout
)

export default router

/**
 * Determino solo la rutas de comunicación con el servidor, las configuraciones de las rutas se
 * harán en los CONTROLADORES.
 */
