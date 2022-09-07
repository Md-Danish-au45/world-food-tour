const multer = require("multer")
const multerStorage = multer.memoryStorage();
 const multerFilter = (req, file, cb) => {
     if (file.mimetype.startsWith('image'))
      { cb(null, true); 
    } else {
        cb(('Not an image! Please upload only images.', 400), false);
  } };
         const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
 exports.uploadUserPhoto = upload.single('photo'); 