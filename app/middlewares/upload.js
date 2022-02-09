import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {

        cb(null, './hotels');
    },
    filename: function(req, file, cb) { <<

        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});


const cover_storage = multer.diskStorage({
    destination: function(req, file, cb) {

        cb(null, './room_images');
    },
    filename: function(req, file, cb) {

        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname + 'cover_image');
    }
});

const upload = multer({

    storage: storage
});
const cover_upload = multer({

    storage: cover_storage
});





const upload_hotel = upload.array('hotelImage', 8);
const uploadroom = cover_upload.array('roomImage', 8);






export default {
    upload_hotel,
    uploadroom

};