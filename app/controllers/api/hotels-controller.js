import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';

class HotelsController {
    async getHotel(req, res) {
        try {
            const hotel = await models.Hotels.findById(req.params.id);
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

    async getHotels(req, res) {
        try {
            const Hotels = await models.Hotels.find();
            res.status(202).json({
                status: 'success',
                data: {
                    Hotels,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createHotel(req, res) {
        try {
            const newhotel = await models.Hotels.create(req.body);
            res.status(202).json({
                status: 'success',
                data: {
                    hotel: newhotel,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async updateHotel(req, res) {
        try {
            const Hotels = await models.Hotels.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    Hotels,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deleteHotel(req, res) {
        try {
            const Hotels = await models.Hotels.findByIdAndDelete(req.params.id);

            res.status(202).json({
                status: 'success',
                data: {
                    Hotels,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }
}

export default new HotelsController();