import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'room must have a name'],
        unique: true,
    },
    description: {
        type: String,
        // required: [true, 'room must have a description'],
    },
    type: {
        type: String,
        // required: [true, 'room must have a type']
    },
    roomImage: { 
        type: Array, 
        required: [true, 'hotel must have a img'],
       },
    status: {
        type: Boolean,
        default:false,
        // required: [true]
    },
    price: {
        type: Number,
        // required: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
});

export default roomSchema;