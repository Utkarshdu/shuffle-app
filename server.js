const express = require("express");
const app= express();
const mongoose= require("mongoose");

const db= 'mongodb+srv://utk123:Sz5XnB2CvOybszy6@cluster0.rqrlqgg.mongodb.net/shuffle-app-db?retryWrites=true&w=majority'
mongoose.set("strictQuery", true);
mongoose.connect(db, {
    
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindandModify: false
}).then(() =>{
    console.log('connection succesful')
}).catch((error)=> console.log(`no connection`));

const port=process.env.port|| 3000;
const host=process.env.host|| "localhost"

app.listen(port,()=>{
    console.log(`server started at http://${host}:${port}`);
});