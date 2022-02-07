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
    price: {
        type: Number,
        // required: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
    },
});
hotelsSchema.plugin(arrayValidator);
export default hotelsSchema;