// Always create class because it's easier to call methods by class
import userModel from "../Models/users.js";
import bcrypt from "bcryptjs";

class AuthController{
    static home= async (req, res)=>{
        try {
            return res
                    .status(200)
                    .json({Message:"Welcome to MERN Practice"})
        } catch (error) {
            return res
                    .status(400)
                    .json(error)
        }
    }

    static login = async (req, res)=>{
        const {email, password}= req.body;
        try {
             if(email && password){
                const userExist= await userModel.findOne({email: email});
                if(userExist){
                    const passCompare= await bcrypt.compare(password, userExist.password);
                    // if(userExist.password === password){
                    if(passCompare){
                        return res
                                .status(200)
                                .json({Message: "User LogIn Successfull."})
                    } else{
                        return res
                                .status(400)
                                .json({Message: "Please provide correct password"})
                    }
                } else {
                    return res
                            .status(400)
                            .json({Message: "User Not Found Please Register Yourshelf"})
                }
             } else {
                return res
                        .status(400)
                        .json({Message : "All Fields Are Required"})
             }
        } catch (error) {
            return res
                    .status(400)
                    .json(error)
        }
    }

    static register = async (req, res)=>{
        const {username, email, password}= req.body;  // for getting data from body
        try {
            const userExist = await userModel.findOne({email: email});

            if(userExist){
                return res 
                    .status(400)
                    .json({Message : "User Already Exist Please Login."})
            } else{
                // password hashing
                const genSalt= await bcrypt.genSalt(10);
                const hashedPassword= await bcrypt.hash(password, genSalt);

                // inBuilt way to create a user
                // const newUser= await userModel.create({username, email, password});
                const newUser= new userModel({
                    username: username,
                    email: email,
                    password: hashedPassword
                })

                const savedUser= await newUser.save();

                if(savedUser){
                    return res 
                            .status(201)
                            .json({Message: "User Registered Successfully", User: newUser})
                } else{
                    return res 
                            .status(400)
                            .json({Message: "User not registered"})
                }
            }
        } catch (error) {
            return  res
                    .status(400)
                    .json(error)
        }
    }

    static allUsers= async (req, res)=>{
        try {
            const users= await userModel.find({}, 'username');
            const userCount = await userModel.countDocuments({});
            if(users){
                return  res
                        .status(200)
                        .json({Count: userCount , Users: users})
            } else {
                return  res
                        .status(400)
                        .json({Message : "No Users Found"})
            }
        } catch (error) {
            return  res
                    .status(400)
                    .json(error)
        }
    }
}

export default AuthController;