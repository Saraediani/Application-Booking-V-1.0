import models from '../../models/index.js';
import AppException from '../../exceptions/AppException.js';


class roomsController {
    async getRoom(req, res) {
        try {
            const room = await models.rooms.findById(req.params.id);
            res.status(202).json({
                status: 'success',
                data: {
                    room,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }


    async getRooms(req, res) {
        try {
            const rooms = await models.rooms.find();
            res.status(202).json({
                status: 'success',
                data: {
                    rooms,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async createRoom(req, res) {
        const images = []
        const uploadedImages = req.files
            // console.log(uploadedImages);
        for (const uploadedImage of uploadedImages) {
            images.push(uploadedImage.filename)
        }
        const rooms = models.rooms
        const room = new rooms({
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            number: req.body.number,
            roomImage: images
        });

        room.save().then(result => {
            // console.log(result);
            res.status(201).json({
                message: 'Created room successfully',
                createdroom: {
                    name: result.name,
                    description: result.description,
                    roomImage: result.roomImage,
                    type: result.type,
                    number: result.number
                }
            });
        }).catch(err => {
            // console.log(err);
            res.status(500).json({
                error: err
            });
        });



    }

    async updateRoom(req, res) {

        try {
            const rooms = await models.rooms.findByIdAndUpdate(
                req.params.id,
                req.body, {
                    new: true,
                    runValidators: true,
                }
            );

            res.status(202).json({
                status: 'success',
                data: {
                    rooms,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }

    async deleteroom(req, res) {
        try {
            const rooms = await models.rooms.findByIdAndDelete(req.params.id);

            res.status(202).json({
                status: 'success',
                data: {
                    rooms,
                },
            });
        } catch (err) {
            throw new AppException(err, 400);
        }
    }
}

export default new roomsController();