import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to DB");
    } catch (err) {
        console.log(err);
    }
}

app.use(express.json())
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/products", productRoutes)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    })
})

const port = 8800;

app.listen(port, () => {
    connect()
    console.log("connected to Server!")
})