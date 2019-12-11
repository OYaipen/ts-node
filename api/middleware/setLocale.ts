import { Request, Response, NextFunction } from 'express'

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
    try {
        const lang = req.header('lang');
        if (!lang) return res.status(401).json('lang?');
        next();
    } catch (e) {
        res.status(400).send('Invalid lang');
    }
}