import express from "express"
import { signup, login } from "../Controler/UserControler.js";
export const userRouter=express.Router()

userRouter.post("/signup",signup)
userRouter.post("/login",login)
export default userRouter;