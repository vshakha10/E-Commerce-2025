import mongoose, { Schema } from 'mongoose'
import { EcomSubCategory } from '../models/EcomSubCategory'

const SubCategorySchema = new Schema<EcomSubCategory>(
    {
        name: {
            type: String, required: true, lowercase: true
        },
        description: { type: String, required: true, trim: true },
        logo: { type: String },
        isActive: { type: Boolean }

    }, { timestamps: true })

export const SubCategory = mongoose.model<EcomSubCategory>("SubCategory", SubCategorySchema)