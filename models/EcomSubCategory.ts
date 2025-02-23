import mongoose from "mongoose";

export interface EcomSubCategory {

    _id:String;
    category_id:mongoose.Types.ObjectId
    name: String;
    description: String;
    logo: String;
    isActive: Boolean;
    updateAt?: string;
    createAt?: String;
    
}