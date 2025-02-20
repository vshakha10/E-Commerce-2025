import { Router, Request, Response, response } from "express";
import * as SubCategory from '../controller/SubCategoryController'

const SubCategoryRouter: Router = Router();

/**
 * usage:Get All SubCategory
 * methods:GET
 * params:not - params
 */


SubCategoryRouter.get('/', async (request: Request, response: Response) => {
    await SubCategory.getAllSubCategory(request, response)
})

/**
 * usage: Get a SubCategory
 * methods:GET
 * params:CategortID
 */

SubCategoryRouter.get('/:id', async (request: Request, response: Response) => {
    await SubCategory.getSubCategory(request, response)
})

/**
 * usage:Create a SubCategory 
 * mathods : POST
 * params: name , description , logo , isActive
 */

SubCategoryRouter.post('/', async (request: Request, response: Response) => {
    await SubCategory.CreateSubCategory(request, response)
})

/**
 * usage:Update a SubCategory 
 * mathods : PUT
 * params: name , description , logo , isActive  ,SubCategoryID
 */

SubCategoryRouter.put("/:id" , async(request:Request , res:Response)=>
{
    await SubCategory.UpdateSubCategory(request,response)
})

/**
 * usage:Delete a SubCategory 
 * mathods : Delete
 * params: SubCategoryID
 */


SubCategoryRouter.delete("/:id", async (request: Request, res: Response) => {
    await SubCategory.DeleteSubCategory(request, response)
})




export default SubCategoryRouter;