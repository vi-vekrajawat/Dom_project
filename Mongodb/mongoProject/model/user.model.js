import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        get:(value)=>{
            return "hello"+value;
        }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        set:(value)=>{
            console.log("Setter exexuted......")
            const saltKey = bcrypt.genSaltSync(12)
            value=bcrypt.hashSync(value,saltKey)
            return value
        }
    },
    contact:{
        type:String,
        required:true,
        trim:true
    },
    profile:{
        imageName:String,
        address:String

    },
    isVerified:{
        type:Boolean,
        default:false
    },

},{toJSON:{getters:true}},{versionKey:false})

const User = mongoose.model('user',userSchema)
export default User