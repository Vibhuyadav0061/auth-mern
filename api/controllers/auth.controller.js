import User from "../models/user.models.js";
import bcryptjs from 'bcryptjs'
// import { errorhandler } from "../utils/error.js";
export const signup = async(req,res ,next)=>{
    
    const {username , email , password} = req.body;
    const hashPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username , email , password:hashPassword});

    try{
        await newUser.save();
        res.status(201).json({message:"User created successfully"});
    }catch(error){
        // res.status(500).json(error.message);
        // next(errorhandler(300,"something went wrong"));
        next(error);
    }
    
    
}