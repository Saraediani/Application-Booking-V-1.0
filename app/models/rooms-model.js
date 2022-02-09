import mongoose from 'mongoose';

const roomsSchema = new mongoose.Schema({
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
    roomImage: {
        type: Array,
        required: [true, 'room must have a img'],
    },
    number: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    // reserved: [{
    //     from: String,
    //     to: String,
    // }, ],


    created_at: {
        type: Date,
        default: Date.now(),
    },
    hotelId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hotel',
        required: [true],
    },

})


export default roomsSchema;