import mongoose from "mongoose";

export interface EcomProduct{
    Sub_category_id :mongoose.Types.ObjectId,
    name:string,
    description:string,
    image:string,
    images:Image,
    price:string,
    brand:string,
    quantity:string

}

export interface Image{
    url:string,
    altText?:string,
}