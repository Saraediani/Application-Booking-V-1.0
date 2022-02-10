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
        default: 'booked',
        enum: ['booked', 'available'],
        require: true,
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

reservationSchema.virtual('rooms', {
    ref: 'Reservation',
    localField: '_id',
    foreignField: 'status_room',
    justOne: true
  });

export default reservationSchema;