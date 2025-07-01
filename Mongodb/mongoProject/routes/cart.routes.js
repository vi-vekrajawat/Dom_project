import express from 'express'
import { addCart,fetchCart } from '../controller/cart.controller.js'
const cartRouter = express.Router()

cartRouter.post('/add-to-cart',addCart)
cartRouter.get('/:userId',fetchCart)



export default cartRouter;