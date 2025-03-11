import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, "uploads/");
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

export default upload;
