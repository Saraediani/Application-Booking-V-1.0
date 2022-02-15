import mongoose from 'mongoose';

const paymentMethodSchema = new mongoose.Schema({

    title:{
        type: String,
        enum: ['paypal', 'creditcard', 'stripe'],
        required: [true, 'must choose a payment method']
    },

    

         
});

paymentMethodSchema.virtual('method', {
    ref: 'payment',
    localField: '_id',
    foreignField: 'payment_method',
    justOne: true
  });



export default paymentMethodSchema