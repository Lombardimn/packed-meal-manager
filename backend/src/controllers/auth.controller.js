import User from '../models/user.model.js';

export const register =  async (req, res) => {
  const {
    firstName,
    lastName,
    handle,
    email,
    password,
    rol
  } = req.body

  try {
    const newUser = new User({
      firstName,
      lastName,
      handle,
      email,
      password,
      rol
    })

    const userSave = await newUser.save()
    res.json(userSave);
  } catch (error) {
    console.log(error)
  }
};

export const login = (req, res) => res.send('login');