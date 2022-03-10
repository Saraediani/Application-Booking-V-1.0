import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    room_id: { 
        type: mongoose.Schema.ObjectId,
         ref: 'rooms',
      
     },
         
    client_id: { 
    type: mongoose.Schema.ObjectId,
    ref: 'Clients',
    
     },  

     status: {
      // type: mongoose.Schema.Types.ObjectId,
      // ref:'rooms',
      type: String,
      default: 'booked',
      enum: ['booked', 'available'],
    },

      payments: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'payment'

      },

      date_from:{
          type: Date,
        require: true,
      },

      date_to:{
        type: Date,
      require: true,
    }
});

// reservationSchema.virtual('statu', {
//   ref: 'rooms',
//   localField: 'status',
//   foreignField: '_id',
//   justOne: true
// });




export default reservationSchema;