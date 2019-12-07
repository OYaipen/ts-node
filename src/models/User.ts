import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

const User = new Schema({
    username: { type: String, required: true, min: 4, lowercase: true },
    email: { type: String, unique: true, required: true, lowercase: true },
    password: { type: String, required: true },
    active: { type: Boolean, default: true }
}, {
    minimize: false,
    timestamps: true
});

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    active: boolean;
    encryptPassword(password: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
}

User.methods.encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

User.methods.validatePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);

}
export default model<IUser>('User', User)