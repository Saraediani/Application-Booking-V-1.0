import mongoose from 'mongoose';
import arrayValidator from 'mongoose-array-validator'

const roomsSchema = new mongoose.Schema({
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
            value: 1,
            message: props => `length of \`${props.path}\` (${props.value.length}) is less than allowed!`
        },
        maxItems: {
            value: 8,
            message: props => `length of \`${props.path}\` (${props.value.length}) is more than allowed!`
        },
    },

      
     price: {
        type: Number,
        // required: true,
    },

    created_at: {
        type: Date,
        default: Date.now(),
    },
    hotelId: {
        type: mongoose.Schema.ObjectId,
        ref: 'hotel',
        required: [true],
    },

    created_at: {
        type: Date,
        default: Date.now(),
      },

});





  roomsSchema.virtual('reservation', {
    ref: 'Reservation',
    localField: '_id',
    foreignField: 'room_id',
    justOne: true
});

roomsSchema.set('toObject', { virtuals: true });
roomsSchema.set('toJSON', { virtuals: true });



roomsSchema.plugin(arrayValidator);
export default roomsSchema;