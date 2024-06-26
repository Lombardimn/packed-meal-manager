import jwt from 'jsonwebtoken'
// import { TOKEN_KEY } from '../config.js'

import dotenv from 'dotenv'
dotenv.config()

export const authRequired = (req, res, next) => {
  const { token } = req.cookies
  if (!token) return res.status(401).json({ message: 'Authorization denied.' })

  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token.' })
    req.decoded = decoded

    next()
  })
}
