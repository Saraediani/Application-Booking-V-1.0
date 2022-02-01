import multer from 'multer';

  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
    
      cb(null, './hotels');
    },
    filename: function(req, file, cb) {
      console.log(file.filename);
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });
  
  // const fileFilter = (req, file, cb) => {
  //   // reject a file
  //   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
  //     cb(null, true);
  //   } else {
  //     cb(null, false);
  //   }
  // };


  const upload = multer({
   
    storage: storage
  });


 const uploads = upload.array('hotelImage', 8)

  
  


export default uploads;

