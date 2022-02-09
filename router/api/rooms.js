import roomsController from '../../app/controllers/api/rooms-controller.js';
import auth from '../../app/middlewares/authentification.js';
import upload  from '../../app/middlewares/upload.js';
import authorization from '../../app/middlewares/authorization.js';


export default {
  group: {
    prefix: '/rooms',
    middlewares: [
      auth,
      function (req, res, next) {
        authorization(req, res, next, 'admin', 'owner','user');
      },
    ],
  },
  routes: [
    {
      method: 'get',
      path: '/',
      handler: roomsController.getRooms,
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
      handler: roomsController.getRoom,
    },
    {
      method: 'put',
      path: '/:id',
      middlewares: [auth],
      handler: roomsController.updateRoom,
    },
    {
      method: 'delete',
      middlewares: [auth],
      path: '/:id',
      handler: roomsController.deleteroom,
    },
  ],
};
