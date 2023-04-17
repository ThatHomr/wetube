import express from "express";
import {editUser, deleteUser} from "../controllers/userController.js"


const userRouter = express.Router();



userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);

export default userRouter;