import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import cookieParset from 'cookie-parser'

const app = express()
const PORT_SERVER = 4321

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParset())
app.use('/api', authRoutes)

export { app, PORT_SERVER }
