import validator from 'validator';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const clientsShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'user must have a name'],
    unique: true,
  },
  email: {
    type: String,
    validate: [validator.isEmail, 'Please enter a valid email'],
    required: [true, 'user must have a email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'user must have a password'],
    minlength: 8,
    select: false,
  },
  phone: {
    type: String,
    // validate: [validator.isEmail, 'Please enter a valid email'],
    // required: [true, 'user must have a phone'],
    unique: true,
  },
  adresse: {
    type: String,
    // validate: [validator.isEmail, 'Please enter a valid email'],
    // required: [true, 'user must have a adress'],
    unique: true,
  },
  role: {
    type: String,
    required: false,
    default: 'client',
    enum: ['client'],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  passwordChangedAt: {
    type: Date,
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetExpires: {
    type: Date,
  },
});

clientsShema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  }
});

export default clientsShema;
