import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';

class ClientsController {
  
  async getClient(req, res) {
    try {
      const clients = await models.clients.findById(req.params.id);
      res.status(202).json({
        status: 'success',
        data: {
          clients,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async getClients(req, res) {
    try {
      const clients = await models.clients.find();
      res.status(202).json({
        status: 'success',
        data: {
            clients,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async createClient(req, res) {
    try {
      const newClient = await models.clients.create(req.body);
      res.status(202).json({
        status: 'success',
        data: {
          client : newClient,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async updateClient(req, res) {
    try {
      const clients = await models.clients.findByIdAndUpdate(
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
          clients,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async deleteClient(req, res) {
    try {
      const clients = await models.clients.findByIdAndDelete(req.params.id);

      res.status(202).json({
        status: 'success',
        data: {
          clients,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }
}

export default new ClientsController();
