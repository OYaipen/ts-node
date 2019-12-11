import { Router } from "express";
import {  profile, register, login } from "../controllers/auth";
import { TokenValidation } from "../middleware/verifyToken";
const router = Router();

router.route('/register')
    .post(register);
router.route('/login')
    .post(login);
router.route('/user')
    .get(TokenValidation, profile);

export default router;