import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    hotel: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'hotels'
     },
         
    clients: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Clients'
     },  

    room: { 
     type: mongoose.Schema.Types.ObjectId,
     ref: 'rooms'
    },

    // payment:{
    //     type: mongoose.Schema.Types.ObjectId,
    //  ref: 'payment'
    // },

    from: Date,

    until: Date,
});

export default reservationSchema;