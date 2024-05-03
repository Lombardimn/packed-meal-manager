import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
  const {
    firstName,
    lastName,
    handle,
    email,
    password,
    rol
  } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      handle,
      email,
      password: passwordHash,
      rol
    });

    const userSave = await newUser.save();
    const token = await createAccessToken({ id: userSave._id });

    res.cookie('token', token);
    res.json({
      _id: userSave._id,
      handle: userSave.handle,
      rol: userSave.rol,
      createdAt: userSave.createdAt,
      updatedAt: userSave.updatedAt
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = (req, res) => res.send('login');