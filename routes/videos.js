import express from 'express';
import { createVideo, getAllVideos, getVideo, addView } from "../controllers/video.js";

const router = express.Router();

router.post("/create", createVideo);
router.get("/getAllVideos", getAllVideos);
router.get("/getVideo/:videoId", getVideo);
router.put("/play/:videoId", addView);

export default router;