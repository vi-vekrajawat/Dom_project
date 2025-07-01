import { Cart } from "../model/cart.model.js";

export const fetchCart = async(request,response,next)=>{
    try{
        let {userId} = request.params
        console.log(userId)
        let cart = await Cart.findOne({userId}).populate("cartItems.productId").populate("userId")
        return response.status(201).json({"Cart deatils":cart})
    }
    catch(err){
        console.log(err)
        return response.status(500).json({message:"Internal Server Error"})
    }
}

export const addCart = async(request,response,next)=>{
    try{
        let {userId,productId} = request.body
        let cart  = await Cart.findOne({userId})

        if(cart){
            let status = cart.cartItems.some((item)=>{
                return item.productId==productId
            })
            if(status)
                return response.status(400).json({message:"Item Alreaady Added to Cart",cart})
            cart.cartItems.push({productId})
            await cart.save()
            return response.status(201).json({message:"Item successfully Added !",cart})
        }
        else{
            let cart = new Cart({userId,cartItems:[{productId}]})
            await cart.save();
            return response.status(201).json({message:"Successfully created Cart !",cart})
        }
    }
    catch(err){
        console.log(err)
        return response.status(500).json({message:"Internal server Error"})
    }
}