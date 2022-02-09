import mongoose from 'mongoose';

const choicepaymentSchema = new mongoose.Schema({

    payment_method:{
        type: 'string',
        default:'null',
        enum:['paypal', 'stripe'],
        required:true
    }

});


choicepaymentSchema.virtual('choice', {
    ref: 'payment',
    localField: '_id',
    foreignField: 'payment_choice',
    justOne: true
  })


export default choicepaymentSchema;
