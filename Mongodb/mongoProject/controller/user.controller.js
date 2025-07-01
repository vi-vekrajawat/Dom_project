import User from "../model/user.model.js"
import { validationResult } from "express-validator"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
dotenv.config()
import { response } from "express"


export const fetchUser = async(request,response)=>{
    try{
        let id = request.params
        let user = await User.findById(id)
        user.profile.imageName = "http://localhost:3000/profile/"+user.profile.imageName
        return response.status(200).json({user})
    }
    catch(err){
        console.log(err)
        return response.status(500).json({message:"internal server error"})
    }
}

export const createProfile = async(request,response)=>{
    try{
        
        let user = await User.findById(request.params.userId)
        user.profile.imageName = request.file.filename
        user.profile.address=request.body.address
        user.name = request.body.name??user.name
        user.contact = request.body.contact??user.contact
        user.save()
        return response.status(200).json({message:"Profile Updated......"})
    }
    catch(err){
        console.log(err)
        return response.status(500).json({message:"Internal server error"})
    }
}

export const list = async(request,response)=>{
    try{    
        let user = await User.find()
        return response.status(200).json({message:"User find",user})
}
catch(err){
    console.log(err)
    return response.status(500).json({message:"Inrernal server error"})
}
}

export const userCreate = async (request, response) => {
    try {
        let errors = validationResult(request)
        if (errors.isEmpty()) {
            let { name, email, password, contact } = request.body
            let result = await User.create({ name, email, password, contact });
            await sendEmail(name,email)
            return response.status(201).json({ message: "User created", user: result })
        }
        else {
            console.log(errors)
            return response.status(401).json({ message: "somethingis error" })
        }
    }
    catch (err) {
        console.log(err)
        return response.status(500).json({ message: "Bad Request" })
    }
}

export const verifyAccount = async(request,response)=>{
    try{
        let {email} = request.body
        console.log(email)
        email = email.trim().replace(/\/$/, '');
        let result = await User.updateOne({email},{$set:{isVerified:true}})
        return response.status(200).json({message:"Account verified successfully",result})
    }
    catch(err){
        console.log(err)
        return response.status(500).json(({err:"Internal server error"}))
    }
}



export const authenticate = async (request, response) => {
    try {
            let { email, password } = request.body
            let user = await User.findOne({ email });
            if (!user.isVerified) {
                return response.status(401).json({ message: "Account is not verified" })
            }
            if(!user){
                return response.status(401).json({ message: "Invalid email or password" })
            }
                let status = bcrypt.compareSync(password, user.password)
                user.password=undefined
                status & response.cookie("token",createCookie(user.email,user._id,user.contact))
                return status ? response.status(200).json({ message: "User Sign Successfully" }) : response.status(401).json({ message: "User Unauthorized" })
           
        
    }
    catch (err) {
        return response.status(500).json({ message: "Internal Server Erorr" })
    }
}


const sendEmail = (name,email)=>{
    return new Promise((resolve,reject)=>{
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

let mailOptions = {
  from: process.env.EMAIL,
  to: email,
  subject: 'Account verification',
 html: `<h4>Dear ${name}</h4>
            <p>Thank you for registration. To verify account please click on below button</p>
            <form method="post" action="http://localhost:3000/user/verification">
              <input type="hidden" name="email" value="${email}"/>
              <button type="submit" style="background-color: blue; color:white; width:200px; border: none; border: 1px solid grey; border-radius:10px;">Verify</button>
            </form>
            <p>
               <h6>Thank you</h6>
               Backend Api Team.
            </p>`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
            return reject(error); // ✅ REJECT

  } else {
    console.log('Email sent: ' + info.response);
            return resolve(info); // ✅ RESOLVE

  }
});
});
}

const createCookie = (email,userId,contact)=>{
    let payload = {email,userId,contact}
    return jwt.sign(payload,process.env.TOKEN_SECRET)
}