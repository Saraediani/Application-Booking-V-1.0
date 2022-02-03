import roomsController from '../../app/controllers/room-controller.js';
import auth from '../../app/middlewares/authentification.js';
import upload  from '../../app/middlewares/upload.js';



export default {
  group: {
    prefix: '/rooms',
    middlewares: [
      auth,
      function (req, res, next) {
        authorization(req, res, next, 'admin', 'owner',);
      },
    ],
  },
  routes: [
    {
      method: 'get',
      path: '/',
      handler: roomsController.getrooms,
    },
    {
      method: 'post',
      path: '/',
      middlewares: [auth, upload.uploadroom],
      handler: roomsController.createroom,
    },
    {
      method: 'get',
      path: '/:id',
      handler: roomsController.getroom,
    },
    {
      method: 'put',
      path: '/:id',
      middlewares: [auth],
      handler: roomsController.updateroom,
    },
    {
      method: 'delete',
      middlewares: [auth],
      path: '/:id',
      handler: roomsController.deleteroom,
    },
  ],
};
