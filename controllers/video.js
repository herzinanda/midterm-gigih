import Video from '../models/Video.js';
import { createError } from '../error.js'

export const createVideo = async (req, res, next) => {
    try {
        const video = {
            thumbnailImg: req.body.thumbnailImg,
            videoUrl: req.body.videoUrl,
            desc: req.body.desc,
        }
        const newVideo = await new Video(video);

        await newVideo.save();
        res.status(200).send("New video was created successfully");
    } catch (error) {
        next(err);
    }
}

export const getAllVideos = async (req, res, next) => {
    try {
        const videos = await Video.find();
        res.status(200).send(videos);
    } catch (error) {
        next(createError(500, "Internal Server Error"))
    }
}

export const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.videoId);
        if (!video) {
            return next(createError(404, "Video not found"));
        }
        res.status(200).send(video);
    } catch (error) {
        next(createError(500, "Internal Server Error"))
    }
}