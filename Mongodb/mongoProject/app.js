import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import router from "./routes/user.routes.js";
import  productModel  from "./routes/product.routes.js";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import cartRouter from "./routes/cart.routes.js";
dotenv.config()

const app = express()

mongoose.connect(process.env.DB_URL).then((result)=>{
    app.use(express.static('public'))
    app.use(cors())
    app.use(cookieParser())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/user',router)
    app.use('/product',productModel)
    app.use('/cart',cartRouter)
    
    app.listen(process.env.PORT,()=>{
        console.log("server is running on port 3000")
    })
}).catch(err=>{
    console.log(err)
})