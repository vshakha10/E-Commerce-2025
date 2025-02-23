import e,{Request, Response} from "express";
import { request } from "http";
import { EcomProduct } from "../models/EcomProduct";
import { Product } from "../DataBase/ProductSchema";


/**
 * usage : Get All Product
 * methods : GET
 * params : not - params
 * url : http://127.0.0.1:6666/subCategory
 * 
 */

export const getAllProduct = async(request: Request, response:Response) => {
    try{
        const thegetProduct: EcomProduct[] | null | undefined = await Product.find()

        return response.status(200).json({
            data: thegetProduct,
            msg: "Get all Products"
        })
    }catch (error) {
        console.error("Error :", error);
        return response.status(500).json({
            msg: "Failed to Product",
        });
    }
}



/**
 * usage : Get A Product
 * methods : GET
 * params : SubCategoryID
 * url : http://127.0.0.1:6666/subCategoryID
 * 
 */

export const getProduct = async (request:Request, response:Response) => {
    try{
        let{id} = request.params
        const thegetProduct: EcomProduct[] | null | undefined = await Product.findById(id)

        return response.status(200).json({
            data: thegetProduct,
            msg: "Get all Product"
        })
    }catch (error) {
        console.error("Error :", error);
        return response.status(500).json({
            msg: "Failed to Product",
        });
    }
}

/**
 * usage : Create a Product
 * methods : POST,
 * params : name , description , logo , isActive 
 * url : http://127.0.0.1:6666/subCategory
 */

export const CreateProduct = async(request:Request, response:Response) => {
    try {
        let{Sub_category_id, name, description, image, images, price, brand, quantity } = request.body;

        const newProduct: EcomProduct | null | undefined =await new Product({
            Sub_category_id, name, description, image, images, price, brand, quantity
        }).save()

        return response.status(201).json({
            data: newProduct,
            msg: 'Product create successfully'
        }
    )
    }catch (error) {
        console.error("Error creating Product:", error);
        return response.status(500).json({
            msg: "Failed to create Product",
        });
    }
}


/**
 * usage : Update a Product
 * methods:PUT,
 * params:name , description , logo , isActive  , SubCategoryID
 * url : http://127.0.0.1:6666/subCategory/subCategory
 */

export const UpdateProduct = async(request:Request ,response:Response) => {
    try{
        let {id} = request.params;

        //check Product
        const theProduct = await Product.findById(id);
        if(!Product){
            return response.status(404).json({
                msg:"Product not found",
            });
        }

        //Update the Product
        let{Sub_category_id,name,description,image,images,price,brand,quantity } = request.body;

        const theUpdateProduct : EcomProduct | null | undefined = await Product.findByIdAndUpdate(Sub_category_id,
            { name , description , image , images , price , brand , quantity},
            { new: true }
        )
        return response.status(201).json({
            data:theUpdateProduct,
            msg: 'Product updated successfully'
        })
    } catch (error) {
        console.error("Error updating Product:", error);
        return response.status(500).json({
            msg:"Failed to Update Product"
        });
    }
}

/**
 * usage : Delete Product
 * methods:DELETE
 * Params:SubCategoryID
 * url : http://127.0.0.1:6666/subCategoryID
 */


export const DeleteProduct = async(request:Request , response:Response)=>
{
    try {
        let { id } = request.params

        //  Check  Product
        const theProduct = await Product.findById(id);
        if (!Product) {
            return response.status(400).json({
                msg: "Product not found",
            });
        }
        const theDeleteSubCategory: EcomProduct | null | undefined = await Product.findByIdAndDelete(id)

        return response.status(202).json({
            data: null,
            msg: "Product is Deleted"
        })

    } catch (error) {
        console.error("Error deleting Product:", error);
        return response.status(500).json({
            msg: "Failed to delete Product",
            
        });
    }
   
}