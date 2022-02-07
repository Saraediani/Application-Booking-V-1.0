import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';


class reservationsController {
  async getreservation(req, res){
    try {
      const reservation = await models.reservations.findById(req.params.id);
      res.status(202).json({
        status: 'success',
        data: {
          reservation,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }
 
  
  async getreservations(req, res) {
    try {
      const reservations = await models.reservations.find();
      res.status(202).json({
        status: 'success',
        data: {
          reservations,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async createreservation(req, res) {
  

  const reservations = models.reservations;
  const reservation = new reservations({
    hotel: req.params.hotel,
    clients: req.body.clients,
    room: req.body.room,

    });
 

reservation.save().then(result => {
    console.log(result);
    res.status(201).json({
        message: 'Created reservation successfully',
        createdreservation: {
            hotel: result.hotel,
            clients: result.clients,
          
            
        }
    });
}).catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
});
  }

  async updatereservation(req, res) {

    try {
      const reservations = await models.reservations.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      res.status(202).json({
        status: 'success',
        data: {
          reservations,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async deletereservation(req, res) {
    try {
      const reservations = await models.reservations.findByIdAndDelete(req.params.id);

      res.status(202).json({
        status: 'success',
        data: {
          reservations,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }
}

export default new reservationsController();
