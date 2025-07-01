import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    reviews: [],
    retunrPolicy:String,
    images: [],
    thumbnail: String,

    // reviews:[
    //     {
    //         rating:Number,
    //         comment:String,
    //         date:String,
    //         revieName:String,
    //         reviewWEmail:String
    //     }
    // ]
})

const Product = mongoose.model("product", productSchema)
export default Product;