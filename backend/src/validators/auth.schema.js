import { z } from 'zod'

export const registerSchema = z.object({
  firstName: z.string({
    required_error: 'First name is required'
  }),
  lastName: z.string({
    required_error: 'Last name is required'
  }),
  handle: z.string({
    required_error: 'Handle is required'
  }),
  email: z.string({
    required_error: 'Email is required'
  }).email({
    message: 'Invalid email'
  }),
  password: z.string({
    required_error: 'Password is required'
  }).min(6, {
    message: 'Password must be at least 6 characters'
  }),
  rol: z.string({
    required_error: 'Rol is required'
  })
})

export const loginSchema = z.object({
  handle: z.string({
    required_error: 'Username is required'
  }),
  password: z.string({
    required_error: 'Password is required'
  }).min(6, {
    message: 'Password must be at least 6 characters'
  })
})
