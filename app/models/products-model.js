import mongoose from 'mongoose';

const productsShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product must have a name'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'product must have a desc'],
  },
  productImage: { 
    type: String, 
    required: [true, 'product must have a img'],
   },
  price: {
    type: Number,
    required: [true, 'product must have a price'],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default productsShema;
