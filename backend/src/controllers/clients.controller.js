import Client from '../models/client.model.js'

export const getAllUsers = async (req, res) => {
  const clients = await Client.find()
  res.json(clients)
}

export const getOneUser = async (req, res) => {
  const client = await Client.findById(req.params.id)

  if (!client) return res.status(404).json({ message: 'Client not found.' })
  res.json(client)
}

export const createUser = async (req, res) => {
  const {
    firstname,
    lastname,
    address: { street, numberStreet, floor, apartament },
    locality,
    province,
    state,
    postalCode,
    telephone: { prefix, numberPhone }
  } = req.body

  const newClient = new Client({
    firstname,
    lastname,
    address: {
      street,
      numberStreet,
      floor,
      apartament
    },
    locality,
    province,
    state,
    postalCode,
    telephone: {
      prefix,
      numberPhone
    },
    user: req.decoded.id
  })

  const saveClient = await newClient.save()
  res.json(saveClient)
}

export const deleteUsers = async (req, res) => {
  const client = await Client.findByIdAndDelete(req.params.id)

  if (!client) return res.status(404).json({ message: 'Client not found.' })

  return res.sendStatus(204)
}

export const updateUser = async (req, res) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })

  if (!client) return res.status(404).json({ message: 'Client not found.' })
  res.json(client)
}
