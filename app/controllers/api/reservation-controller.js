import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';

class reservationsController {
    async getreservation(req, res) {
        try {
            const reservation = await models.reservations.findById(req.params.id).populate('room_id').populate('client_id');
            res.status(202).json({
                status: 'success',
                data: {
                    reservation,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async getavailableRooms(req, res) {

        try {
            const { from, to } = req.query;
            const filter = {
                $or: [{
                        $and: [{
                            date_from: { $lte: from },
                            date_to: { $gt: from },
                        }, ],
                    },
                    { date_from: { $gt: from, $lte: to } },
                ],
            };
            const reservations = await models.reservations.find(filter, { _id: 1 }).populate(
                "room_id",
                "room_id"
            );
            // return res.send(reservations)
            const reservedRooms = reservations.map((reservation) => {
                return reservation.room_id.id;
            });
            const rooms = await models.rooms.find({ _id: { $nin: reservedRooms } });
            const count = await models.rooms.countDocuments({ _id: { $nin: reservedRooms } });

            return res.json({ count: count, rooms: rooms });
        } catch (error) {
            throw new AppException(err, 400);
        }
    }

    async getreservations(req, res) {
        try {

            const reservations = await models.reservations.find().populate('room_id').populate('client_id').populate('payment');
            res.status(202).json({
                status: 'success',
                data: {
                    reservations,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createreservation(req, res) {

        try {
            const newreservation = await models.reservations.create(req.body);

            res.status(202).json({
                status: 'success',
                data: {
                    reservations: newreservation,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }


    }

    async updatereservation(req, res) {

        try {
            const reservations = await models.reservations.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    reservations,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deletereservation(req, res) {
        try {
            const reservations = await models.reservations.findByIdAndDelete(req.params.id);

            res.status(202).json({
                status: 'success',
                data: {
                    reservations,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }
}

export default new reservationsController();