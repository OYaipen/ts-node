import { Router } from "express";
const router = Router();
import  photos from "./photo";
import auths from "./auth";

router.use('/photos', photos);
router.use('/', auths);

export default router;