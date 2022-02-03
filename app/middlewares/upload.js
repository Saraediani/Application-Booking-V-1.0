import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(req, file, cb) {

        cb(null, './hotels');
    },
    filename: function(req, file, cb) {
        // console.log(file.filename);
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});




const upload = multer({

    storage: storage
});


const uploads = upload.array('hotelImage', 8);
const uploadroom = upload.array('roomImage', 8)







export default {
    uploads,
    uploadroom
};