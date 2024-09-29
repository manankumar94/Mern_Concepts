import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// mongodb:127.0.0.1:27017/Your_DB_Name   OR
//  mongodb://localhost:27017/Your_DB_Name
// => these two are used to connect with local stirage through mongoDB compass

// const URI= "mongodb://localhost:27017/mern_practice";

// mongoose.connect(URI)  => one way to connect with db

// for cloud connection
//copy URI from mongoDB atlas then paste it remember to change your password in URI and add your database name

// const URI="mongodb+srv://mortal9193:qwertyuiop@cluster0.k4mbu.mongodb.net/mern_practice?retryWrites=true&w=majority&appName=Cluster0";

const URI= process.env.MONGODB_URI;
const connectDB = async()=>{
    try {
        const connection= await mongoose.connect(URI);
        console.log("Connected Succesfully with Database (mern_practice)");
    } catch (error) {
        console.error("Database Connection Failed", error);
        process.exit(0);
    }
}

export default connectDB;