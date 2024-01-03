const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }

});

const upload = multer({
  storage,
  fileFilter: function (req, file, callback) {
    if (
      file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpeg'
    ) {
      callback(null, true);
    } else {
      console.log('only jpg & png file supported!');
      callback(null, false);
    }
  }
});

module.exports = upload;
