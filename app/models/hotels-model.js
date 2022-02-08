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

hotelsSchema.virtual("rooms", {
        ref: "rooms",
        localField: "_id",
        foreignField: "hotelId",
    }),

    hotelsSchema.set("toObject", { virtuals: true })
hotelsSchema.set("toJSON", { virtuals: true })
export default hotelsSchema;