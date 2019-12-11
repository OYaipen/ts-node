import { Router } from "express";
import { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto } from "../controllers/photo";
import upload from "../libs/multer";
const router = Router();

// routes
router.route('/')
    .get(getPhotos)
    .post(upload.single('image'), createPhoto);

router.route('/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto);

export default router;