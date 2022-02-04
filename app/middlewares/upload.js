import multer from 'multer';

  const storages = multer.diskStorage({
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
    storage: cover_storage
  });


  
  const upload = multer({
    storage: storages
  });

  function fileUpload(req, res, next) {
    cover_upload.single('cover_image');
    upload.array('hotelImage', 8);
    next();
  }


  // const upload_cover = cover_upload.single('cover_image');

  // const uploads = upload.array('hotelImage', 8);

  const uploadroom = upload.array('roomImage', 8);

  
  


export default {
  // uploads,
  fileUpload,
  uploadroom,
  // upload_cover
}

