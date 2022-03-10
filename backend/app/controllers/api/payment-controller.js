import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';

class paymentsController {
  
  async method(req, res){
    try {
      const methods = await models.methodpayment.create(req.body);
      res.status(202).json({
        status: 'success',
        data: {
          methods,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }
  
  async getpayments(req, res) {

    try {
      const payments = await models.payment.find().populate('method');
      res.status(202).json({
        status: 'success',
        data: {
          payments,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async createpayment(req, res) {
    
    try {

      const newpayment =  await models.payment.create(req.body);

      res.status(202).json({
        status: 'success',
        data: {
          payments: newpayment,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }


  }

  async updatepayment(req, res) {

    try {
      const payments = await models.payment.findByIdAndUpdate(
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
          payments,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async deletepayment(req, res) {
    try {
      const payments = await models.payment.findByIdAndDelete(req.params.id);

      res.status(202).json({
        status: 'success',
        data: {
          payments,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }
}

export default new paymentsController();
