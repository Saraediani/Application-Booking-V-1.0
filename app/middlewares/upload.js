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
    
      cb(null, './room_images');
    },
    filename: function(req, file, cb) {

      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname + 'cover_image');
    }
  });

  const cover_upload = multer({
   
    storage: cover_storage
  });
  
  const upload = multer({
   
    storage: storage
  });


  // const upload_cover = cover_upload.single('coverImage');

  const uploads = upload.fields([
    { name: "hotelImage" },
    { name: "coverImage"},]);

  const uploadroom = cover_upload.array('roomImage', 8);

 
  
  


export default {
  uploads,
  uploadroom,

};

