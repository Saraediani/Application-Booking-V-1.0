import mongoose from 'mongoose';

const hotelsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'user must have a name'],
        unique: true,
    },
    description: {
        type: String,
        required: [true, 'user must have a name'],
    },
    type: {
        type: String,
        required: [true, 'user must have a name']
    },
    hotelImage: { 
        type: Array, 
        required: [true, 'hotel must have a img'],
       },
    address: {
        type: String,
        required: [true, 'user must have a name']
    },
    price: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
});

export default hotelsSchema;