import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:String,
    slug:String,
    URL:String

})

export const category = mongoose.model("category","categorySchema")