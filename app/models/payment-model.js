import mongoose from 'mongoose';


const paymentSchema = new mongoose.Schema({
    name: { 
        type: 'string',
     },
         
    card_number: { 
    type: 'string',
    
     },  

      date:{
        type: Date,
        default: Date.now()
      },

});

paymentSchema.virtual('rooms', {
    ref: 'Reservation',
    localField: '_id',
    foreignField: 'status_room',
    justOne: true
  });

  paymentSchema.virtual('method', {
    ref: 'method_payment',
    localField: '_id',
    foreignField: 'payment_method',
    justOne: true
  });



export default paymentSchema;