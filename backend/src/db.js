import { connect } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
  try {
    const db = await connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.NAME_DB}.jjabruz.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.NAME_DB}`)
    console.log('>>> DB is connected', db.connection.name)
  } catch (error) {
    console.log('Error connecting to database\n', error)
  }
}
