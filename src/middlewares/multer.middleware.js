import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.resolve("public/temp"));  // ← resolves from project root, always
    },

    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

export const upload = multer({ storage });