import { Request, Response } from 'express'

export async function signup(req: Request, res: Response): Promise<Response> {
    return res.json({ message: "signup" });
};

export async function signin(req: Request, res: Response): Promise<Response> {
    return res.json({ message: "signin" });
};

export async function profile(req: Request, res: Response): Promise<Response> {
    return res.json({ message: "profile" });
};