import mongoose from 'mongoose';
import usersShema from './users-model.js';
import hotelsShema from './hotels-model.js';
import ownerShema from './owner.js';
import reservationSchema from './reservation-model.js';
import clientsShema from './clients-model.js';
import roomSchema from './room-model.js';
import paymentShema from './payment.js';
import choicepaymentSchema from './choice_payment.js';



const db = process.env.DATABASE_LOCAL;

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('connection 👌');
  });

const models = {};


models.reservations = mongoose.model('Reservation', reservationSchema)

models.hotels = mongoose.model('hotels', hotelsShema);

models.rooms = mongoose.model('rooms', roomSchema);

models.users = mongoose.model('Users', usersShema);

models.owners = mongoose.model('owners', ownerShema);

models.clients = mongoose.model('Clients', clientsShema);

models.payment = mongoose.model('payment', paymentShema);

models.choicepayment = mongoose.model('choice_payment', choicepaymentSchema);







export default models;
