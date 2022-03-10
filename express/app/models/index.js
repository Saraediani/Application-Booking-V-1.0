import mongoose from 'mongoose';
import usersShema from './users-model.js';
import hotelsShema from './hotels-model.js';
import ownerShema from './owner.js';
// import reservationSchema from './reservation-model.js';
import clientsShema from './clients-model.js';
import roomsSchema from './rooms-model.js';
import paymentSchema from './payment-model.js';
import paymentMethodSchema from './method_payment.js'




mongoose
    .connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log('connection 👌');
    });

const models = {};


// models.reservations = mongoose.model('Reservation', reservationSchema)

models.hotels = mongoose.model('hotels', hotelsShema);

models.rooms = mongoose.model('rooms', roomsSchema);

models.users = mongoose.model('Users', usersShema);

models.owners = mongoose.model('owners', ownerShema);

models.clients = mongoose.model('Clients', clientsShema);

models.payment = mongoose.model('payment', paymentSchema);

models.methodpayment = mongoose.model('method_payment', paymentMethodSchema);



export default models;