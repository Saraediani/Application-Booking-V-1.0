import mongoose from 'mongoose';
import usersShema from './users-model.js';
// <<<<<<< HEAD
import hotelsShema from './hotels-model.js';
import ownerShema from './owner.js';


import clientsShema from './clients-model.js';


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
models.hotels = mongoose.model('hotels', hotelsShema);
models.users = mongoose.model('Users', usersShema);

models.owners = mongoose.model('owners', ownerShema);

models.clients = mongoose.model('Clients', clientsShema);



export default models;
