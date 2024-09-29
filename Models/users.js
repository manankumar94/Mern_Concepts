import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    email : {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin : {
        type: Boolean,
        default: false,
    },
})

// defining collection name {requires two inputs coll name and schema}
const userModel= new mongoose.model("User", userSchema);

export default userModel;