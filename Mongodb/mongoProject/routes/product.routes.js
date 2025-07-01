import express from "express";
import {productDetail,getAllProduct,getById,deleteById,searchProduct} from '../controller/product.controller.js'

export const productModel = express.Router()

productModel.post("/save-all-data",productDetail)
productModel.get('/',getAllProduct)
productModel.get('/getId/:id',getById)
productModel.get('/search',searchProduct)
productModel.delete('/delete/:id',deleteById) // basically no need , bcz sir not created it 

export default productModel
