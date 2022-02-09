import auth from '../../app/middlewares/authentification.js';
import authrization from '../../app/middlewares/authorization.js';
import paymentController from '../../app/controllers/api/payment-controller.js'

export default {
  group: {
    prefix: '/payment',
    middlewares: [
      auth,
      function (req, res, next) {
        authrization(req, res, next, 'admin', 'clients', 'user');
      },
    ],
  },
  routes: [
    {
      method: 'post',
      path: '/choice',
      handler: paymentController.choice_payment,
    },
    {
      method: 'post',
      path: '/',
      handler: paymentController.createpayment,
    },
    {
      method: 'get',
      path: '/choice',
      handler: paymentController.getchoicepayment,
    },
    {
      method: 'get',
      path: '/',
      handler: paymentController.getpayments,
    },
    // {
    //   method: 'delete',
    //   path: '/:id',
    //   handler: paymentController.deletepayment,
    // },
  ],
};
