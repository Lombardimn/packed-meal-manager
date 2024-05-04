import { z } from 'zod'

export const createClientSchema = z.object({
  firstname: z.string({
    required_error: 'First name is required'
  }),
  lastname: z.string({
    required_error: 'Last name is required'
  }),
  address: {
    street: z.string({
      required_error: 'Street is required'
    }),
    numberStreet: z.number({
      required_error: 'Number is required'
    }).min(3, {
      message: 'Number must be at least 3 characters'
    }).max(4, {
      message: 'Number must be at most 4 characters'
    }),
    floor: z.string().optional(),
    apartament: z.string().optional()
  },
  locality: z.string({
    required_error: 'Locality is required'
  }),
  province: z.string({
    required_error: 'Province is required'
  }),
  state: z.string({
    required_error: 'State is required'
  }),
  postalCode: z.number({
    required_error: 'Postal code is required'
  }).min(4, {
    message: 'Postal code must be at least 4 characters'
  }),
  telephone: {
    prefix: z.number({
      required_error: 'Prefix is required'
    }).min(3, {
      message: 'Prefix must be at least 3 characters'
    }).max(4, {
      message: 'Prefix must be at most 4 characters'
    }),
    numberPhone: z.number({
      required_error: 'Number is required'
    }).max(7, {
      message: 'Number must be at most 8 characters'
    })
  }
})

export const updateClientSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  address: {
    street: z.string().optional(),
    numberStreet: z.number().min(3, {
      message: 'Number must be at least 3 characters'
    }).max(4, {
      message: 'Number must be at most 4 characters'
    }).optional(),
    floor: z.string().optional(),
    apartament: z.string().optional()
  },
  locality: z.string().optional(),
  province: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.number().min(4, {
    message: 'Postal code must be at least 4 characters'
  }).optional(),
  telephone: {
    prefix: z.number().min(3, {
      message: 'Prefix must be at least 3 characters'
    }).max(4, {
      message: 'Prefix must be at most 4 characters'
    }).optional(),
    numberPhone: z.number().max(7, {
      message: 'Number must be at most 8 characters'
    }).optional()
  }
})

export const deleteClientSchema = z.object({
  _id: z.string({
    required_error: 'Client id is required'
  })
})

export const getClientSchema = z.object({
  _id: z.string({
    required_error: 'Client id is required'
  })
})

export const getClientsSchema = z.object({
  search: z.string().optional()
})
