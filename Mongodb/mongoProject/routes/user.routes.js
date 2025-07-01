import express from "express";
import { body } from "express-validator";
import { userCreate ,authenticate,verifyAccount,list,createProfile,fetchUser} from "../controller/user.controller.js";
import multer from "multer";
const upload = multer({dest:'public/profile'})
const router = express.Router()
router.get('/',list)
router.post('/',
    body("name","Name is required").notEmpty(),
    body("name","name must be alphabetic").isAlpha(),
    body("email","Email is required").isEmail(),
    body("email","email not empty").notEmpty(),
    body("password","password reqired").notEmpty(),
    body("contact","Contact reqired").notEmpty(),
    userCreate)

router.post('/signIn',authenticate)

router.post('/verification',verifyAccount)
router.patch("/profile/:userId",upload.single("imageName"),createProfile)
router.get("/:userId",fetchUser)
export default router