import express from 'express';
import { addComment, deleteComment, getCommentsById } from '../controllers/comment.js';

const router = express.Router();

router.post("/:videoId", addComment);
router.delete("/:commentId", deleteComment);
router.get("/:videoId", getCommentsById);

export default router;