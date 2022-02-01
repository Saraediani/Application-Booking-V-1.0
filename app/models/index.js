import mongoose from 'mongoose';
import usersShema from './users-model.js';
import hotelsShema from './hotels-model.js';
import ownerShema from './owner.js';


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

export default models;
