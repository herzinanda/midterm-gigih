import express from 'express';
import { createVideo } from "../controllers/video.js";

const router = express.Router();

router.post("/create", createVideo);

// router.post("/signin", signin);

export default router;