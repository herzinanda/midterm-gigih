import { createError } from '../error.js';
import Comment from '../models/Comment.js';
import Video from '../models/Video.js';

export const createComment = async (req, res, next) => {
    try {
        const videoId = req.params.videoId;

        if (Video.find({ _id: videoId })) {
            return next(createError(400, "Video ID not found"))
        }
        const comment = {
            videoId: videoId,
            username: req.body.username,
            comment: req.body.videoUrl,
        }

        if (!comment.comment || !comment.username) {
            return next(createError(400, "Username or Comment are required"));
        }

        const newComment = await new Comment(comment);
        await newComment.save();
        res.status(200).send("New video was created successfully");
    } catch (error) {
        next(createError(500, "Internal Server Error"));
    }
}