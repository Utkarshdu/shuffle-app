const express = require("express");
const app= express();
const mongoose= require("mongoose");
const { model, Schema } = mongoose;

const db= 'mongodb+srv://utk123:Sz5XnB2CvOybszy6@cluster0.rqrlqgg.mongodb.net/shuffle-app-db?retryWrites=true&w=majority'
mongoose.set("strictQuery", true);
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateindex: true,
    useUnifiedTopology: true,
    useFindandModify: false
    
}).then(() => {
    console.log(`connection succesful`);
}).catch((err) => { 
    console.log(`no connection`);
});



const categorySchema = new Schema(
    {name: {type: String,required: true}},

    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);
const imageSchema = new Schema(
    {name: {type: String,required: true},
     category: { type: Array, required: true },
     likenumber: { type: Number},
     imageUrl: { type: String, required: true },
    },

    { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);


app.get('/api/health', (req,res) => {
    res.send({
        time: new Date(),

    });
});

const port=process.env.port|| 3000;
const host=process.env.host|| "localhost"

app.listen(port,()=>{
    console.log(`server started at http://${host}:${port}`);
});