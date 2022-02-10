import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';


class roomsController {
  async getroom(req, res){
    try {
      const room = await models.rooms.findById(req.params.id).populate('status', 'status');
      res.status(202).json({
        status: 'success',
        data: {
          room,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }
 

  async getrooms(req, res) {
    try {
      let filter = {}
      if (req.query.name) filter.name = req.query.name;
      if (req.query.type) filter.type = req.query.type;
      const rooms = await models.rooms.find(filter).populate('status', 'status').populate("hotels");
      res.status(202).json({
        status: 'success',
        data: {
          rooms,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async createroom(req, res) {
    let images = []
    const uploadedImages = req.files
    for (const uploadedImage of uploadedImages){
      images.push(uploadedImage.filename)
    }

  const rooms = models.rooms;
  const room = new rooms({
    name: req.body.name,
    description: req.body.description,
    type: req.body.type,
    price: req.body.price,
    status: req.body.status,
    roomImage: images,
     hotelId: req.body.hotelId

    });
 

room.save().then(result => {
    console.log(result);
    res.status(201).json({
        message: 'Created room successfully',
        createdroom: {
            name: result.name,
            price: result.price,
            description: result.description,
            roomImage: result.roomImage,
            type: result.type,
            
        }
    });
}).catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
});
  }

  async updateroom(req, res) {

    try {
      const rooms = await models.rooms.findByIdAndUpdate(
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
          rooms,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async deleteroom(req, res) {
    try {
      const rooms = await models.rooms.findByIdAndDelete(req.params.id);

      res.status(202).json({
        status: 'success',
        data: {
          rooms,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }
}

export default new roomsController();
