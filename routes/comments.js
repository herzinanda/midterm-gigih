import express from 'express';
import { addComment, deleteComment, getComments } from '../controllers/comment.js';

const router = express.Router();

router.post("/:videoId", addComment);
router.delete("/:commentId", deleteComment);
router.get("/", getComments);

export default router;