const { Router } = require("express");
const route = Router();
const CategoryModel = require("../database-model/category");
const GalleryModel = require("../database-model/image-gallery");

route.get("/like/:imageId", async (req, res, next) => {
    try {
        const imageId = req.params.imageId;
        var likesNumber;
        const imageDetail = await GalleryModel.findOne({ _id: imageId });

        if (imageDetail) {
            if (imageDetail.likes) {
                likesNumber = 0;
            } else {
                likesNumber = 1;
            }
        }

        await GalleryModel.updateOne(
            { _id: imageId },
            { $set: { likeNumber: likesNumber } }
        );

        
    } catch (error) {
        console.log(error);
        next(error);
    }
});

route.get("/discover/:category", async(req,res,next)=>{
   try{ const category=req.params.category;

    const galleryDetail = await GalleryModel.find({
        category: { $in: [category] }
    })
    .limit(4);
    res.json(galleryDetail);
} catch (error) {
    console.log(error);
    next(error);
}

});