import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';


class paymentsController {

  async choice_payment(req, res){
    const choices = models.choicepayment
    const choice_payment = new choices({
        payment_method: req.body.payment_method,
     
      });
  
      choice_payment.save().then(result => {
      console.log(result);
      res.status(201).json({
          message: 'Created payment successfully',
          payment_method: {
              payment_method: result.payment_method,

          }
      });
  }).catch(err => {
      console.log(err);
      res.status(500).json({
          error: err
      });
  });
  }
 
  
  async getpayments(req, res) {
    try {
      const payments = await models.payment.find().populate('payment_choice');
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

  async getchoicepayment(req, res) {
    try {
      const choicepayment = await models.choicepayment.find();
      res.status(202).json({
        status: 'success',
        data: {
            choicepayment,
        },
      });
    } catch (err) {
      throw new AppException(err, 400);
    }
  }

  async createpayment(req, res) {
 
  const payments = models.payment
  const payment = new payments({
    name: req.body.name,
    card_number: req.body.card_number,
    expiration_date: req.body.expiration_date,
    payment_choice: req.body.payment_choice
   
    });

payment.save().then(result => {
    console.log(result);
    res.status(201).json({
        message: 'Created payment successfully',
        createdpayment: {
            name: result.name,
            card_number: result.card_number,
            expiration_date: result.expiration_date,

        }
    });
}).catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
});

  }

//   async updatepayment(req, res) {

//     try {
//       const payments = await models.payment.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {
//           new: true,
//           runValidators: true,
//         }
//       );

//       res.status(202).json({
//         status: 'success',
//         data: {
//           payments,
//         },
//       });
//     } catch (err) {
//       throw new AppException(err, 400);
//     }
//   }

//   async deletepayment(req, res) {
//     try {
//       const payments = await models.payment.findByIdAndDelete(req.params.id);

//       res.status(202).json({
//         status: 'success',
//         data: {
//           payments,
//         },
//       });
//     } catch (err) {
//       throw new AppException(err, 400);
//     }
//   }
}

export default new paymentsController();