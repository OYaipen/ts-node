import { Schema, model, Document } from "mongoose";

const Foto = new Schema({
    title: String,
    description: String,
    imagePath: String
}, {
    collection: 'fotos', timestamps: { createdAt: 'creado', updatedAt: 'actualizado' }
})

export interface IPhoto extends Document {
    title: string,
    description: string,
    imagePath: string
}

export default model<IPhoto>('Photo', Foto);