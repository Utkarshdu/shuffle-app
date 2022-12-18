const express = require("express");
const app= express();

const port=process.env.port|| 3000;
const host=process.env.host|| "localhost"

app.listen(port,()=>{
    console.log(`server started at http://${host}:${port}`);
});