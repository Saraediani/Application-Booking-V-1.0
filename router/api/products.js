import ProductsController from '../../app/controllers/api/products-controller.js';
import auth from '../../app/middlewares/authentification.js';
import upload from '../../app/middlewares/upload.js';



export default {
  group: {
    prefix: '/products',
  },
  routes: [
    {
      method: 'get',
      path: '/',
      handler: ProductsController.getProducts,
    },
    {
      method: 'post',
      path: '/',
      middlewares: [auth, upload],
      handler: ProductsController.createProduct,
    },
    {
      method: 'get',
      path: '/:id',
      handler: ProductsController.getProduct,
    },
    {
      method: 'put',
      path: '/:id',
      middlewares: [auth],
      handler: ProductsController.updateProduct,
    },
    {
      method: 'delete',
      middlewares: [auth],
      path: '/:id',
      handler: ProductsController.deleteProduct,
    },
  ],
};
