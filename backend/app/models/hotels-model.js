import mongoose from 'mongoose';
import arrayValidator from 'mongoose-array-validator'


const hotelsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'hotel must have a name'],
        unique: true,
    },
    description: {
        type: String,
        // required: [true, 'hotel must have a description'],
    },
    type: {
        type: String,
        // required: [true, 'hotel must have a name']
    },
    // coverImage: {
    //     type: String,
    //      required: [true, 'hotel must have a cover image']
    // },
    hotelImage: {
        type: Array,
        minItems: {
            value: 1,
            message: props => `length of \`${props.path}\` (${props.value.length}) is less than allowed!`
        },
        maxItems: {
            value: 8,
            message: props => `length of \`${props.path}\` (${props.value.length}) is more than allowed!`
        },
        required: [true, 'hotel must have a img'],
    },
    address: {
        type: String,
        // required: [true, 'hotel must have a address']
    },

    created_at: {
        type: Date,
        default: Date.now(),
    },
});

hotelsSchema.virtual('reservation', {
    ref: 'Reservation',
    localField: '_id',
    foreignField: 'hotel',
    justOne: true
});

hotelsSchema.virtual("rooms", {
        ref: "rooms",
        localField: "_id",
        foreignField: "hotelId",
    }),

    hotelsSchema.set("toObject", { virtuals: true })
hotelsSchema.set("toJSON", { virtuals: true })

hotelsSchema.plugin(arrayValidator);

export default hotelsSchema;