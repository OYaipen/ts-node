import { Router } from "express";
import { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto } from "../controllers/photo";
import upload from "../libs/multer";
const router = Router();

// routes
router.route('/photos')
    .get(getPhotos)
    .post(upload.single('image'), createPhoto);

router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto);

export default router;