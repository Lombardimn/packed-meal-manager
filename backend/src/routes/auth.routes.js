import { Router } from 'express'
import { register, login, logout, profile } from '../controllers/auth.controller.js'
import { authRequired } from '../middlewares/validateToken.js'

const router = Router()

/**
 * POSTs
 */

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

/**
 * GETs
 */

router.get('/profile', authRequired, profile)

export default router

/**
 * Determino solo la rutas de comunicación con el servidor, las configuraciones de las rutas se
 * harán en losCONTROLADORES.
 */
