import { Request, Response } from 'express'
import User, { IUser } from '../models/User';
import { signupValidation, signinValidation } from '../validation/user';
import jwt from "jsonwebtoken";
import i18n from "../config/i18n"
export async function register(req: Request, res: Response): Promise<Response> {
    // Validation
    const { error } = signupValidation(req.body);
    if (error) return res.status(400).json(error.message);

    const { username, email, password, active } = req.body;
    // find email
    const findEmail = await User.findOne({ email });
    if (findEmail) return res.status(400).json(`${i18n.__('There is a user occupying this email:')} ${email}`);
    try {
        // Saving User
        const newUser = { username, email, password, active }
        const user: IUser = new User(newUser);
        user.password = await user.encryptPassword(user.password)
        const saveUSer = await user.save();
        // Generate Token
        const token: string = jwt.sign({ _id: saveUSer._id }, process.env.TOKEN_SECRET || 'tokentest', {
            expiresIn: 60 * 60 * 24
        });
        return res.header('token', token).json(saveUSer)
    } catch (e) {
        return res.status(400).json(e);
    }
};

export async function login(req: Request, res: Response) {
    // Validation
    const { error } = signupValidation(req.body);
    if (error) return res.status(400).json(error.message);
    const { email, password } = req.body;
    // validate user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json(('Hello'));
    // Validate Password
    const correctPassword: boolean = await user.validatePassword(password);
    if (!correctPassword) return res.status(400).json('invalid password');
    // Generate token
    const token: string = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'tokentest', {
        expiresIn: 60 * 60 * 24
    });
    res.header('token', token).json(user);
};

export async function profile(req: Request, res: Response) {
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) {
        return res.status(404).json('No User found');
    }
    res.json(user);
};