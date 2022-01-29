import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';
import path from 'path';


class ProductsController {
  async getProduct(req, res){
    try {
      const product = await models.products.findById(req.params.id);
      res.status(202).json({
        status: 'success',
        data: {
          product,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }
 
  
  async getProducts(req, res) {
    try {
      const products = await models.products.find();
      res.status(202).json({
        status: 'success',
        data: {
          products,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async createProduct(req, res) {
    // console.log('result'+ ':' + req.file);
    // res.send('file uploaded')
  //  try{ 
  //    console.log(req.body);
  //   const newproducts = await models.products.create(req.body);
  //   res.status(202).json({
  //     status: 'success',
  //     data: {
  //       products : newproducts,
  //     },
  //   });
     
  // } catch (err) {
  //   throw new AppException(err, 400);
  // }
  // console.log('result'+ ':' + req.file);
  const Product = models.products
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    productImage: req.file.path
    });

product.save().then(result => {
    console.log(result);
    res.status(201).json({
        message: 'Created product successfully',
        createdProduct: {
            name: result.name,
            price: result.price,
            description: result.description,
            productImage: result.productImage    
        }
    });
}).catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
});



  }

  async updateProduct(req, res) {

    try {
      const products = await models.products.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      res.status(202).json({
        status: 'success',
        data: {
          products,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async deleteProduct(req, res) {
    try {
      const products = await models.products.findByIdAndDelete(req.params.id);

      res.status(202).json({
        status: 'success',
        data: {
          products,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }
}

export default new ProductsController();
