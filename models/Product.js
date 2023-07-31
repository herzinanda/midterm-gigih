import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true,
    },
    productTitle:
    {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productImg: {
        type: String,
        required: true,
    },
    productUrl: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
}, { timestamps: true })

export default mongoose.model("Product", ProductSchema)