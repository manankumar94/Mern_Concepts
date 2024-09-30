// it is a middleware which is used to validate schema Which we define with the help of Zod

import UserValidation from "../Validators/authValidator.js";

const validateSignUp= async (req, res, next)=>{
    try {
        // we validate the req body against Schema
        UserValidation.signUpSchema.parse(req.body);
        next();
    } catch (error) {
        return res
                .status(400)
                .json({
                    Message: "Invid Input Data",
                    Error: error})
    }
}

export default validateSignUp;