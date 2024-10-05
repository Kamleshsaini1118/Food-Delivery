import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator'


// create register user
const registerUser = async (req, res) => {
    // store the user detail 
    const { name, password, email } = req.body;

    try {
        // checking is user already exists
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({
                success: false,
                message: "User already exists"
            })
        }

        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please enter a valid email"
            })
        }

        // check password (8 character)
        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Please enter strong password"
            })
        }

        // before creating the account encrypt the password 
        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        // create the new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        // save the new user in database
        const user = await newUser.save();



    } catch (error) {
        
    }
}


// create the login user
const loginUser = async (req, res) =>{

}



export {
    loginUser,
    registerUser
}