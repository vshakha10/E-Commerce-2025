import mongoose,{Schema} from "mongoose";
import { EcomProduct } from "../models/EcomProduct";

const ProductSchema = new Schema<EcomProduct>({
    Sub_category_id:{type:mongoose.Schema.Types.ObjectId,ref:"SubCategory"},
    name:{type:String ,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    images:[{
        url:{type:String,required:true},
        altText:{type:String,required:true},
    }],
    price:{type:String,required:true},
    brand:{type:String,required:true},
    quantity:{type:String,required:true}


},{timestamps:true})

export const Product = mongoose.model<EcomProduct>("Product",ProductSchema)