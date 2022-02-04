import multer from 'multer';

  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
    
      cb(null, './hotels');
    },
    filename: function(req, file, cb) {

      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });

  const cover_storage = multer.diskStorage({
    destination: function(req, file, cb) {
    
      cb(null, './cover_hotels');
    },
    filename: function(req, file, cb) {

      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname + 'cover_image');
    }
  });

  const cover_upload = multer({
   
    cover_storage: cover_storage
  });
  
  const upload = multer({
   
    storage: storage
  });


  // const upload_cover = cover_upload.single('coverimage');

  const uploads = upload.array('hotelImage', 8);

  const uploadroom = upload.array('roomImage', 8);

  //  function fileupload(req, res, next) {
  //   // cover_upload.single('coverImage');

  //     upload.array('hotelImage', 8);
  //    next();

  // }
  
  


export default {
  uploads,
  uploadroom,

};

