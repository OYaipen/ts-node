import { Router, Request, Response } from "express";

const router = Router();

router.use('/api/tasks', require('./task'));

export default router