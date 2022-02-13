import paymentController from '../../app/controllers/api/payment-controller.js';
import auth from '../../app/middlewares/authentification.js';
import authorization from '../../app/middlewares/authorization.js';


export default {
  group: {
    prefix: '/payment',
    middlewares: [
      auth,
      function (req, res, next) {
        authorization(req, res, next, 'admin','owner','user');
      },
    ],
  },
  routes: [
    {
      method: 'get',
      path: '/',
      handler: paymentController.getpayments,
    },
    {
      method: 'post',
      path: '/',
      middlewares: [auth],
      handler: paymentController.createpayment,
    },
    {
      method: 'post',
      path: '/method',
      handler: paymentController.method,
    },
    // {
    //   method: 'put',
    //   path: '/:id',
    //   middlewares: [auth],
    //   handler: paymentController.updatepayment,
    // },
    // {
    //   method: 'delete',
    //   middlewares: [auth],
    //   path: '/:id',
    //   handler: paymentController.deletepayment,
    // },
  ],
};
