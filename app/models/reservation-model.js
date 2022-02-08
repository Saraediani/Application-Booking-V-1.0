import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    room_id: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'rooms',
        //  required:true
     },
         
    client_id: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Clients',
    // required:true
     },  

     status: {
        type: String,
        default: 'available',
        enum: ['pending', 'cancel', 'active', 'available'],
        require: true,
      },
      date:{
          type: String,
        require: true,
      }

    // room: { 
    //  type: mongoose.Schema.Types.ObjectId,
    //  ref: 'rooms',
    //  required:true
    // },

    // payment:{
    //     type: mongoose.Schema.Types.ObjectId,
    //  ref: 'payment'
    // },

    // from: Date,
    // until: Date,
});

export default reservationSchema;