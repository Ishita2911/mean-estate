import User from "../models/user.model.js";
import bcryptjs  from "bcryptjs";
import { errorhandler } from "../utils/error.js";


export const signup = async(req, res) => {
    const { username, email, password } = req.body;
    const hashedpassword = bcryptjs.hashSync(password, 10);
    const newUser= new User ({username, email, password:hashedpassword});
    try{
        await newUser.save();
        res.status(201).json({message:"User Created Successfully"});
    }
    catch(error){
        next(error);
    }
};

