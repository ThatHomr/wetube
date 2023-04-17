import express from "express";
import { joinUser, loginUser } from "../controllers/userController.js"
import { trending, search } from "../controllers/videoController.js"

const globalRouter = express.Router();




globalRouter.get("/", trending);
globalRouter.get("/join", joinUser);
globalRouter.get("/login", loginUser);
globalRouter.get("/search", search);


export default globalRouter;