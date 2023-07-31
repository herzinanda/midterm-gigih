import mongoose from 'mongoose'

const VideoSchema = new mongoose.Schema({
    videoUrl: {
        type: String,
        required: true,
    },
    videoImg: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    tags: {
        type: [String],
        default: [],
    },
    likes: {
        type: Number,
        default: 0,
    },
}, { timestamps: true })

export default mongoose.model("Video", VideoSchema)