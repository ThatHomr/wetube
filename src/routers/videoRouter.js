import express from "express";
import {watchVideo, editVideo, deleteVideo, comments, commentsDelete}
 from "../controllers/videoController.js";

const videoRouter = express.Router();



videoRouter.get("/watch", watchVideo);
videoRouter.get("/edit", editVideo);
videoRouter.get("/delete", deleteVideo);

videoRouter.get("/comments", comments);
videoRouter.get("/comments/delete", commentsDelete);


export default videoRouter;