const mongoose=require("mongoose");
const { model, Schema } = mongoose;
const imageSchema = new Schema(
    {name: {type: String,required: true},
     category: { type: Array, required: true },
     likenumber: { type: Number},
     imageUrl: { type: String, required: true },
    },

    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);
module.exports = model("image-gallery", imageSchema);