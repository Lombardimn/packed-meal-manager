import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', register)
router.post('/login', login)

export default router

/**
 * Determino solo la rutas de comunicación con el servidor, las configuraciones de las rutas se 
 * harán en losCONTROLADORES.
 */