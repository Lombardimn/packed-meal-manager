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

export const login = async (req, res) => {
  const {
    handle,
    password
  } = req.body;

  try {
    const userFond = await User.findOne({ handle })
    if(!userFond) return res.status(400).json({ message: 'User not found.'});
    
    const isMatch = await bcrypt.compare(password, userFond.password);
    if(!isMatch) return  res.status(400).json({ message: 'Invalid credentials.'});
    
    const token = await createAccessToken({ id: userFond._id });

    res.cookie('token', token);
    res.json({
      _id: userFond._id,
      handle: userFond.handle,
      rol: userFond.rol,
      createdAt: userFond.createdAt,
      updatedAt: userFond.updatedAt
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie('token', '', { 
    expires: new Date(0) 
  });

  return res.sendStatus(200);
}