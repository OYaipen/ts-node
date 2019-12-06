import { Router } from "express";
import { signup, signin, profile } from "../controllers/auth";
const router = Router();

router.route('/signup')
    .get(signup);
router.route('/signin')
    .post(signin);
router.route('/profile')
    .post(profile);

export default router;