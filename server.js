const express = require("express");
const app= express();
const mongoose= require("mongoose");
const admin=require("./routes/admin");

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/health', (req,res) => {
    res.send({
        time: new Date(),

    });
});
app.use("/api/admin", admin);

app.use((req,res,next)=>{
    res.status(404);
    res.send({
        error: 'Not found'
    });
});

app.use((err,req,res,next)=>{
    res.status(500);
    res.send({
        error: 'Something went wrong'
    });
});

const port=process.env.port|| 3000;
const host=process.env.host|| "localhost"

app.listen(port,()=>{
    console.log(`server started at http://${host}:${port}`);
});