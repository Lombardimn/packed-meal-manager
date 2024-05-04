import express from 'express'
import morgan from 'morgan'
import cookieParset from 'cookie-parser'

import authRoutes from './routes/auth.routes.js'
import clientsRoutes from './routes/clients.routes.js'

const app = express()
const PORT_SERVER = 4321

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParset())

app.use('/api', authRoutes)
app.use('/api/clients', clientsRoutes)

export { app, PORT_SERVER }
