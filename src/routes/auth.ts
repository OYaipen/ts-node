import { Router } from "express";
import { signup, signin, profile } from "../controllers/auth";
import { TokenValidation } from "../middleware/verifyToken";
const router = Router();

router.route('/signup')
    .post(signup);
router.route('/signin')
    .post(signin);
router.route('/profile')
router.route('/profile')
    .get(TokenValidation, profile);

export default router;