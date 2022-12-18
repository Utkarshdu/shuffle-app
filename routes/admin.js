const { Router } = require("express");
const route = Router();
const CategoryModel = require("/server");
const GalleryModel = require("/server");

route.get("/add-category/:categoryname", async(req,res,next)=>{
    try{
        const categoryName= req.params.categoryName;

        const newCategoryName={name: categoryName};
        await CategoryModel.create(newCategoryName);
        res.send("new category created succesfully");
    } catch(error){ 
            console.log(error);
            next(error);
        }
    });