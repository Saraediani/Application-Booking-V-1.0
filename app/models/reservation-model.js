import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    hotel_id: { 
        type: Schema.Types.ObjectId,
         ref: 'hotels'
         },
    from: Date,
    until: Date,
});

export default reservationSchema;