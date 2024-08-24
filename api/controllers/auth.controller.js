import User from "../models/user.models.js";
// import bcryptjs from 'bcryptjs'
import { errorhandler } from "../utils/error.js";

export const signup = async (req,res)=>{
    
    // const {username , email , password} = req.body;

    console.log(req.body);
    
    // const hashPassword = bcryptjs.hashSync(password,10);
    // const newUser = new User({username , email , password});

    // try{
    //     await newUser.save();
    //     res.status(201).json({message:"User created successfully"});
    // }catch(error){
    //     res.status(500).json(error.message);
    //     // next(errorhandler(300,"something went wrong"));
    //     // next(error);
    // }

    
    
}
//  export const signin = async(req ,res , next)=>{
//     const {email , password } = req.body;
//    try{
//     const validUser = await User.find({email});
//     if(!validUser) return next(errorhandler(404,'User not find'))
//     const validPassword = bcryptjs.compareSync(password , validUser.password)   ;
//    if(!validPassword) return  next(errorhandler(401,'Invalid Password'));
//    }
//    catch(error){
//     next(error);
//    }

//  }