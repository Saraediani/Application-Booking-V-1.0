import paymentController from '../../app/controllers/api/payment-controller.js';
import auth from '../../app/middlewares/authentification.js';
import authorization from '../../app/middlewares/authorization.js';


export default {
  group: {
    prefix: '/',
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
      path: '/payment',
      handler: paymentController.getpayments,
    },
    {
      method: 'post',
      path: '/method',
      middlewares: [auth],
      handler: paymentController.createpayment,
    },
    {
      method: 'get',
      path: '/:id',
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
