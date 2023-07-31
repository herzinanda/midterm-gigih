import express from 'express';
import { createVideo, getAllVideos, getVideo } from "../controllers/video.js";

const router = express.Router();

router.post("/create", createVideo);
router.get("/getAllVideos", getAllVideos);
router.get("/getVideo/:videoId", getVideo);

export default router;