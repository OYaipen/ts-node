import { Request, Response } from 'express'
import User, { IUser } from '../models/User';
import jwt from "jsonwebtoken";

export async function signup(req: Request, res: Response): Promise<Response> {
    //Saving User
    const { username, email, password, active } = req.body;
    const newUser = { username, email, password, active }
    const user: IUser = new User(newUser);
    user.password = await user.encryptPassword(user.password)
    const saveUSer = await user.save();
    //Token
    const token: string = jwt.sign({ _id: saveUSer._id }, process.env.TOKEN_SECRET || 'tokentest')
    return res.header('auth-token', token).json(saveUSer)
};

export async function signin(req: Request, res: Response) {
    const { email, password } = req.body;
    // validate user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json('Email or password is wrong');
    //Valideate Passwor
    const correctPassword: boolean = await user.validatePassword(password);
    if (!correctPassword) return res.status(400).json('invalid password');
    //Generate token
    const token: string = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'tokentest', {
        expiresIn: 60 * 60 * 24
    });
    res.header('auth-token', token).json(user);
};

export async function profile(req: Request, res: Response) {
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).json('No User found');
    }
    res.json(user);
};