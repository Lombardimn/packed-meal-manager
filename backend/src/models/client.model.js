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
    street: {
      type: String,
      required: true,
      maxlength: 50
    },
    numberStreet: {
      type: Number,
      required: true,
      maxlength: 4
    },
    floor: {
      type: Number,
      maxlength: 2
    },
    apartament: {
      type: String,
      maxlength: 2
    }
  },
  locality: {
    type: String,
    maxlength: 20
  },
  province: {
    type: String,
    maxlength: 20
  },
  state: {
    type: String,
    required: true,
    maxlength: 20
  },
  postalCode: {
    type: Number,
    required: true,
    maxlength: 5
  },
  telephone: {
    prefix: {
      type: Number,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 4
    },
    numberPhone: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 7
    }
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},
{
  timestamps: true
})

export default mongoose.model('Client', clientSchema)
