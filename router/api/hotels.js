import HotelsController from '../../app/controllers/api/Hotels-controller.js';
import auth from '../../app/middlewares/authentification.js';

export default {
    group: {
        prefix: '/hotels',
    },
    routes: [{
            method: 'get',
            path: '/',
            handler: HotelsController.getHotels,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [auth],
            handler: HotelsController.createProduct,
        },
        {
            method: 'get',
            path: '/:id',
            handler: HotelsController.getProduct,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [auth],
            handler: HotelsController.updateProduct,
        },
        {
            method: 'delete',
            middlewares: [auth],
            path: '/:id',
            handler: HotelsController.deleteProduct,
        },
    ],
};