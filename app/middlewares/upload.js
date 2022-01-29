import multer from 'multer';

  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
    
      cb(null, 'uploads');
      console.log('Im in storage destination'+ path);
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };


  const upload = multer({
   
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });


 const uploads = upload.array('productImage', 8)

  
  


export default uploads;

