import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        requied: true,
        unique: true,
    },
    imgUrl: {
        type: String,
        requied: true,
    }
}, { timestamps: true })

export default mongoose.model("User", UserSchema)