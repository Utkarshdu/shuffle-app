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

      
route.post("/add-image", async(req,res,next)=>{
    try{
        const name= req.body.name;
        const category=req.body.category;
        const imageUrl=req.body.imageUrl;

        const newImageDetail={
            name: name,
            category: category,
            imageUrl: imageUrl,
        }
        await GalleryModel.create(newImageDetail);
        res.send(" new image added succesfully");
    }catch(error){
        console.log(error);
        next(error);
    }
});
module.exports=route;