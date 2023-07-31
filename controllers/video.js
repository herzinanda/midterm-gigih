import Video from '../models/Video.js';

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