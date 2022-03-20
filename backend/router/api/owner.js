import auth from '../../app/middlewares/authentification.js';
import authrization from '../../app/middlewares/authorization.js';
import OwnerController from '../../app/controllers/api/Owner-controller.js'

export default {
  group: {
    prefix: '/owners',
    // middlewares: [
    //   auth,
    //   function (req, res, next) {
    //     authrization(req, res, next, 'admin', 'user');
    //   },
    // ],
  },
  routes: [
    {
      method: 'get',
      path: '/',
      handler: OwnerController.getowners,
    },
    {
      method: 'post',
      path: '/',
      handler: OwnerController.createOwner,
    },
    {
      method: 'get',
      path: '/:id',
      handler: OwnerController.getowner,
    },
    {
      method: 'put',
      path: '/:id',
      handler: OwnerController.updateowner,
    },
    {
      method: 'delete',
      path: '/:id',
      handler: OwnerController.deleteowner,
    },
  ],
};
