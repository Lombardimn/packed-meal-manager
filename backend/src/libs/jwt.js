// import { TOKEN_KEY } from '../config.js'
import jwt from 'jsonwebtoken'

import dotenv from 'dotenv'
dotenv.config()

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.TOKEN_KEY,
      {
        expiresIn: '2h'
      },
      (err, token) => {
        if (err) reject(err)
        resolve(token)
      }
    )
  })
}
