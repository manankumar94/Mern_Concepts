import express from "express";
import router from "./Router/routes.js";
import connectDB from "./Config/db.js";
// it is afunction that return promise.

const app= express();
const PORT= 6969;

// middleware for passig json data through body
app.use(express.json());


// for calling routes inside Router file
app.use("/", router);

connectDB().then( ()=>{
    app.listen(PORT, (err)=>{
        if(err) console.log(err);
        else console.log(`Server is Running on PORT ${PORT}`);
    })
});

