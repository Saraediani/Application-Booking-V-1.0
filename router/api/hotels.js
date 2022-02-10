import hotelsController from '../../app/controllers/api/hotels-controller.js';
import auth from '../../app/middlewares/authentification.js';
import upload from '../../app/middlewares/upload.js';



export default {
    group: {
        prefix: '/hotels',
    },
    routes: [{
            method: 'get',
            path: '/',
            handler: hotelsController.gethotels,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [auth, upload.uploads],
            handler: hotelsController.createhotel,
        },
        {
            method: 'get',
            path: '/:id',
            handler: hotelsController.gethotel,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [auth],
            handler: hotelsController.updatehotel,
        },
        {
            method: 'delete',
            middlewares: [auth],
            path: '/:id',
            handler: hotelsController.deletehotel,
        },
    ],
};