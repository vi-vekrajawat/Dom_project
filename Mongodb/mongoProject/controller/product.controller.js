import mongoose from "mongoose"
import Product  from "../model/product.model.js"
import { request } from "express"


export const searchProduct = async(request,response)=>{
    try{
        let {title,minPrice,maxPrice,category} = request.query
        let query = {}
        if(category)
            query.category = {$regex:category,$options:i}
        if(title)
            query.title = {$regex:title,$options:i}
        if(minPrice||maxPrice)
            query.price = {};
        if(minPrice)
            query.price.$gte = minPrice
        if(maxPrice)
            query.price.$lte = maxPrice

        const result = await Product.find(query)
        return response.status(200).json({message:"Product Find",result})

    }
    catch(err){
        console.log(err)
        return response.status(500).json({message:"Internal server error"})
    }
}


export const productDetail = async(request,response,next)=>{
    try{
        let productList = request.body
        let saveData = await Product.insertMany(productList)
        return response.status(200).json({message:"All Data Saved",saveData})

    }
    catch(err){
        console.log(err)
        return response.status(500).json({message:"Internal error"})
    }

}

export const getAllProduct = async(request,response,next)=>{
    try{
        let getData = await Product.find()
        return response.status(200).json({message:"All Products",getData})
    }
    catch(err){
        console.log(err)
        return response.status(500).json({message:"Something is internal error"})
    }
}

export const getById = async(request,response,next)=>{
    try{
        let id = request.params.id
        console.log(id)
        await Product.findOne({_id:new mongoose.Types.ObjectId(id)}).then((result)=>{
            return response.status(200).json({message:"found",result})
        })
        // let getProduct = await Product.findById(id)
        // return response.status(200).json({message:"Get Product",getProduct})
    }
    catch(err){
        console.log(err)
        return response.status(500).json({message:"something is Internal is Error"})
    }
}

export const deleteById = async(request,response,next)=>{
    try{
        let id = request.params.id
        await Product.findByIdAndDelete(id)
        return response.status(200).json({message:"Product Deleted"})
    }
    catch(err){
        console.log(err)
        return response.status(500).json({message:"Something is internal error"})
    }
}

