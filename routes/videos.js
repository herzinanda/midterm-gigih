import express from 'express';
import { createVideo, getAllVideos, getVideo, addView } from "../controllers/video.js";

const router = express.Router();

router.post("/", createVideo);
router.get("/all", getAllVideos);
router.get("/:videoId", getVideo);
router.put("/play/:videoId", addView);

export default router;