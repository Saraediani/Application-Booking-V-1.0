import roomsController from "../../app/controllers/api/rooms-controllers.js";
import auth from '../../app/middlewares/authentification.js';
import uploads from '../../app/middlewares/upload.js';




export default {
    group: {
        prefix: '/rooms',
    },
    routes: [{
            method: 'get',
            path: '/',
            handler: roomsController.getRooms,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [auth, uploads.uploadroom],
            handler: roomsController.createRoom,
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
            handler: roomsController.deleteRoom,
        },
    ],
};