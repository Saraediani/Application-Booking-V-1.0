import mongoose from 'mongoose';
import arrayValidator from 'mongoose-array-validator'


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
        minItems: {
            value: 1,
            message: props => `length of \`${props.path}\` (${props.value.length}) is less than allowed!`
        },
        maxItems: {
            value: 8,
            message: props => `length of \`${props.path}\` (${props.value.length}) is more than allowed!`
        },
       },
       status_room:{
        type: mongoose.Schema.Types.ObjectId,
        // default: 'available',
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
roomsSchema.virtual('status', {
    ref: 'Reservation',
    localField: '_id',
    foreignField: 'room_id',
    justOne: true
  });

  roomsSchema.set('toObject', { virtuals: true });
roomsSchema.set('toJSON', { virtuals: true });



roomsSchema.plugin(arrayValidator);


export default roomsSchema;