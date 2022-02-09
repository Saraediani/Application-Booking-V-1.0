import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({


    name:{
        type: 'string',
        required: true
    },
    // card_number:{
    //     type: 'string',
    //     required: true
    // },
    expiration_date:{
        type: Date,
        required: true
    },
    payment_choice:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'choice_payment',
        required:true
    }


});





export default paymentSchema;
