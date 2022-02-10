import mongoose from 'mongoose';

const paymentMethodSchema = new mongoose.Schema({

    title:{
        type: 'string',
        default: 'null',
        enum: ['paypal', 'creditcard', 'stripe', 'null']
    },

    
    payment_method: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'payment',
       
     },
         
});

export default paymentMethodSchema