import ClientsController from '../../app/controllers/api/clients-controller.js';
import auth from '../../app/middlewares/authentification.js';
import authrization from '../../app/middlewares/authorization.js';

export default {
  group: {
    prefix: '/clients',
    // middlewares: [
    //   auth,
    //   function (req, res, next) {
    //     authrization(req, res, next, 'admin', 'user', 'client');
    //   },
    // ],
  },
  routes: [
    {
      method: 'get',
      path: '/',
      handler: ClientsController.getClients,
    },
    {
      method: 'post',
      path: '/',
      handler: ClientsController.createClient,
    },
    {
      method: 'get',
      path: '/:id',
      handler: ClientsController.getClient,
    },
    {
      method: 'put',
      path: '/:id',
      handler: ClientsController.updateClient,
    },
    {
      method: 'delete',
      path: '/:id',
      handler: ClientsController.deleteClient,
    },
  ],
};
