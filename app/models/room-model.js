import mongoose from 'mongoose';
import arrayValidator from 'mongoose-array-validator'


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
        required: [true, 'room must have a img'],
        minItems: {
            value: 4,
            message: props => `length of \`${props.path}\` (${props.value.length}) is less than allowed!`
        },
        maxItems: {
            value: 8,
            message: props => `length of \`${props.path}\` (${props.value.length}) is more than allowed!`
        },
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
roomSchema.plugin(arrayValidator);
export default roomSchema;