import mongoose, { Schema } from 'mongoose'
import { EcomSubCategory } from '../models/EcomSubCategory'

const SubCategorySchema = new Schema<EcomSubCategory>(
    {
        category_id:{type:Schema.Types.ObjectId, ref:"catagory"},
        name: {
            type: String, required: true, lowercase: true
        },
        description: { type: String, required: true, trim: true },
        logo: { type: String },
        isActive: { type: Boolean }

    }, { timestamps: true })

export const SubCategory = mongoose.model<EcomSubCategory>("SubCategory", SubCategorySchema)