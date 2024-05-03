import mongoose from 'mongoose'

const clientSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: 20
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 32
  },
  address: {
    street: {},
    number: {},
    floor: {},
    apartament: {}
  },
  locality: {},
  province: {},
  state: {},
  postalCode: {},
  telephone: {
    prefix: {
      type: Number,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 4
    },
    number: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 7
    }
  },
  timestamps: true
})

export default mongoose.model('Client', clientSchema)
