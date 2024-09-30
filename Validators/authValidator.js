import {z} from "zod";

// creating an object schema

class UserValidation{
    static signUpSchema= z.object({
        username: z
                  .string({ required_error: "Name is required"})
                  .trim()
                  .min(3, {Message: "Name must be at leat of 3 chars. "})
                  .max(250, {Message:"Name must not more than 250 characters"}),
                
        email: z
                .string({required_error: "Email is Required"})
                .trim()
                .email({Message: "Email is Invalid"})
                .min(3, {Message: "Email must be of 3 characters"})
                .max(20, {Message: "Email must not more than 20 characters"}),
    
        password: z
                    .string({required_error: "Password must be required"})
                    .min(5, {Message: "Password must be of 5 chars"})
                    .max(100, {Message: "Password can't be greater than 100 chars"}),
    });
}

export default UserValidation;