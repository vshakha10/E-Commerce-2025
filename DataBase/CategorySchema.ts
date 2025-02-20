import mongoose, { Schema } from 'mongoose'
import { EcomCategory } from '../models/EcomCategory'

const CatagorySchema = new Schema<EcomCategory>({
    category_name: { type: String, required: true, lowercase: true },
    category_description: { type: String, required: true, trim: true },
    category_logo: { type: String },
    category_isActive: { type: Boolean }

}, { timestamps: true })

export const Category = mongoose.model<EcomCategory>("catagory", CatagorySchema)