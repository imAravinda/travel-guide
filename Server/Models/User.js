import mongoose from "mongoose";
import validator from "validator";

const UserSchema = mongoose.Schema({
    Name:{
        type:String,
        required:[true,"Please Enter Your Name"]
    },
    Email:{
        type:String,
        required:[true,"Please Enter the email"],
        unique:true,
        validate:{
            validator:function(val){
                return validator.isEmail(val)
            },
            message:"Please enter the valid email"
        },
        immutable:true
    },
    Password:{
        type:String,
        required:[true,"Please Enter the Password"],
        minlength:8,
        unique:true,
    },
    ConfirmPassword:{
        type:String,
        required:[true,"Please Re-Enter the Password"],
        validate:{
            validator:function(pwd){
                return this.Password === pwd
            },
            message:"Password doesn't match"
        }
    },
    salt:  {type: String, required: true},
})

const User = mongoose.model('User',UserSchema);

export default User;