import mongoose from 'mongoose';


const paymentSchema = new mongoose.Schema({
    name: { 
        type: 'string',
        required:true,
     },
         
    card_number: { 
    type: Number,
    required:true,

    
     },  

      date:{
        type: 'string',
      
        required:true,

      },
      CVV:{
       type: Number,
       required:true,

       
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