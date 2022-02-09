import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';
import path from 'path';


class hotelsController {
    async gethotel(req, res) {
        try {
            const hotel = await models.hotels.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                data: {
                    hotel,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }


    async gethotels(req, res) {
        try {
            const hotels = await models.hotels.find();
            res.status(202).json({
                status: 'success',
                data: {
                    hotels,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createhotel(req, res) {
        let images = []
        const uploadedImages = req.files
        console.log(uploadedImages);
        for (const uploadedImage of uploadedImages) {
            images.push(uploadedImage.filename)
        }
        // console.log(images);
        // console.log('result'+ ':' + req.file);
        // res.send('file uploaded')
        //  try{ 
        //    console.log(req.body);
        //   const newhotels = await models.hotels.create(req.body);
        //   res.status(202).json({
        //     status: 'success',
        //     data: {
        //       hotels : newhotels,
        //     },
        //   });

        // } catch (err) {
        //   throw new AppException(err, 400);
        // }
        // console.log('result'+ ':' + req.file);
        const hotels = models.hotels
        const hotel = new hotels({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            type: req.body.type,
            address: req.body.address,
            hotelImage: images
        });

        hotel.save().then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created hotel successfully',
                createdhotel: {
                    name: result.name,
                    price: result.price,
                    description: result.description,
                    hotelImage: result.hotelImage,
                    type: result.type,
                    address: result.description
                }
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });



    }

    async updatehotel(req, res) {

        try {
            const hotels = await models.hotels.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    hotels,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deletehotel(req, res) {
        try {
            const hotels = await models.hotels.findByIdAndDelete(req.params.id);

            res.status(202).json({
                status: 'success',
                data: {
                    hotels,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }
}

export default new hotelsController();