import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 32,
  },
  handle: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    maxlength: 20,
    minlength: 8,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    maxlength: 16,
    minlength: 8,
  },
  rol: {
    type: String,
    required: true,
  }
},
{
  timestamps: true,
});

export default mongoose.model("User", userSchema);
