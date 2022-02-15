import mongoose from 'mongoose';


const paymentSchema = new mongoose.Schema({

    name: { 
        type: String,
        required: true
     },

     email: { 
       type : String,
       required: true
      },
         
    card_number: { 
      type: Number,
      // required: true
    
     },  

     password: { 
       type: String,
      //  required: true
     },

     cvv: { 
       type: Number,
      //  required: true
     },

      date:{
        type: Date,
        default: Date.now()
      },

      payment_method: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'method_payment',
         required: true
       
     },

});

// paymentSchema.virtual('rooms', {
//     ref: 'Reservation',
//     localField: '_id',
//     foreignField: 'status_room',
//     justOne: true
//   });

paymentSchema.virtual('payment', {
    ref: 'payment',
    localField: '_id',
    foreignField: 'payments',
    justOne: true
  });
  



export default paymentSchema;