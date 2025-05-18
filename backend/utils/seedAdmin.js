import User from "../modals/User.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const createAdmin = async () => {
    await mongoose.connect('mongodb://localhost:27017/upsb');
    const adminExists = await User.findOne({email: 'admin@example.com'});
    if(!adminExists){
        await User.create({
            email: 'admin@example.com',
            password: 'Ajay7906',
            role: 'admin'
        }); 
        console.log("Admin user created");
        
    } else {
        console.log("Admin user already exists");
    }
    process.exit();

}
createAdmin();

