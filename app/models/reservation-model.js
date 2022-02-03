import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    hotel: { 
        type: Schema.Types.ObjectId,
         ref: 'hotels'
         },
    from: Date,
    until: Date,
});

export default reservationSchema;