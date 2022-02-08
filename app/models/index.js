import mongoose from 'mongoose';
import usersShema from './users-model.js';
import hotelsShema from './hotels-model.js';
import ownerShema from './owner.js';
import reservationSchema from './reservation-model.js';
import clientsShema from './clients-model.js';
import roomSchema from './room-model.js';



const db = process.env.DATABASE_LOCAL;

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


models.reservations = mongoose.model('Reservation', reservationSchema)

models.hotels = mongoose.model('hotels', hotelsShema);

models.rooms = mongoose.model('rooms', roomSchema);

models.users = mongoose.model('Users', usersShema);

models.owners = mongoose.model('owners', ownerShema);

models.clients = mongoose.model('Clients', clientsShema);



export default models;
