import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';


class OwnerController {
  async getowner(req, res) {
    try {
      const owner = await models.owners.findById(req.params.id);
      res.status(202).json({
        status: 'success',
        data: {
            owner,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async getowners(req, res) {
    try {
      const owners = await models.owners.find();
      res.status(202).json({
        status: 'success',
        data: {
          owners,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async createOwner(req, res) {
    try {
      const newowner = await models.owners.create(req.body);
      res.status(202).json({
        status: 'success',
        data: {
          owners: newowner,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async updateowner(req, res) {
    try {
      const owner = await models.owners.findByIdAndUpdate(
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
          owner,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async deleteowner(req, res) {
    try {
      const owner = await models.owners.findByIdAndDelete(req.params.id);

      res.status(202).json({
        status: 'success',
        data: {
          owner,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }
}

export default new OwnerController();
