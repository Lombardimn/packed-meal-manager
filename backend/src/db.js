import { connect } from 'mongoose';

export const connectDB = async () => {
  try {
    const db = await connect('mongodb://127.0.0.1:27017/backendDB');
    console.log('>>> DB is connected', db.connection.name);
  } catch (error) {
    console.log('Error connecting to database\n', error);
  }
}
