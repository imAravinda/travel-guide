import User from "../Models/User.js";
import bcrypt from "bcrypt";

export const RegisterUser = async (req,res)=>{
    try {
        const {Name,Email,Password,ConfirmPassword} = req.body;
        const existingUser = await User.findOne({Email:Email});
        if(existingUser !== null){
            res.json({"message":"This user is already exits"})
        }
        
        const salt = await bcrypt.genSalt(12);

        const encryptPassword = await bcrypt.hash(Password,salt);
        const encryptedConfirmPassword = await bcrypt.hash(ConfirmPassword,salt);

        const createUser = await User.create({
            Name:Name,
            Password:encryptPassword,
            Email:Email,
            ConfirmPassword:encryptedConfirmPassword,
            salt:salt
        });

    return res.json(createUser);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
    
}

export const LogInCustomer = async (req,res)=>{
    
    const {Email,Password} = req.body;
    const existingUser = await User.findOne({Email:Email});
    
    if(existingUser !== null){
        const result = await bcrypt.compare(Password,existingUser.Password);
        if(result){
            res.json({"message":"User Login Completed"});
        }
        else{
            res.status(404).json({"message":"Password doesn't match"});
        }
    }else{
        res.status(404).json({"message":"Invalid User credentials"});
    }
}