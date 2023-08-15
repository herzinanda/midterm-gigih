import { createError } from '../error.js';
import Comment from '../models/Comment.js';
import Video from '../models/Video.js';

export const addComment = async (req, res, next) => {
    try {
        const videoId = req.params.videoId;

        const comment = {
            videoId: videoId,
            username: req.body.username,
            comment: req.body.comment,
        }

        if (!comment.comment || !comment.username) {
            return next(createError(400, "Username or Comment are required"));
        }

        const newComment = await new Comment(comment);
        await newComment.save();
        res.status(200).send(newComment);
    } catch (error) {
        next(createError(500, "Internal Server Error"));
    }
}

export const deleteComment = async (req, res, next) => {
    try {
        const commentId = req.params.commentId;
        const comment = await Comment.findOneAndDelete({ _id: commentId });
        res.status(200).json("Comment has been deleted")

    } catch (error) {
        next(createError(500, "Internal Server Error"));
    }
}

export const getCommentsById = async (req, res, next) => {
    try {
        const videoId = req.params.videoId;

        const comments = await Comment.find({ videoId: videoId });
        if (!comments) {
            return next(createError(404, "Product not found"));
        }
        res.status(200).send(comments);
    } catch (error) {
        next(createError(500, "Internal Server Error"));
    }
}