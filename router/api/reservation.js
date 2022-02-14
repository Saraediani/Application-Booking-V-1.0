import reservationController from '../../app/controllers/api/reservation-controller.js';
import auth from '../../app/middlewares/authentification.js';
import authorization from '../../app/middlewares/authorization.js';


export default {
    group: {
        prefix: '/reservation',
        middlewares: [
            auth,
            function(req, res, next) {
                authorization(req, res, next, 'admin', 'owner', 'user');
            },
        ],
    },
    routes: [{
            method: 'get',
            path: '/',
            handler: reservationController.getreservations,
        }, {
            method: 'get',
            path: '/date',
            handler: reservationController.getavailableRooms,
        },
        {
            method: 'post',
            path: '/',
            middlewares: [auth],
            handler: reservationController.createreservation,
        },
        {
            method: 'get',
            path: '/:id',
            handler: reservationController.getreservation,
        },
        {
            method: 'put',
            path: '/:id',
            middlewares: [auth],
            handler: reservationController.updatereservation,
        },
        {
            method: 'delete',
            middlewares: [auth],
            path: '/:id',
            handler: reservationController.deletereservation,
        },
    ],
};