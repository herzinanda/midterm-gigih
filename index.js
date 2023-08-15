import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comments.js';
import productRoutes from './routes/products.js';

const app = express();
dotenv.config()

const connect = async () => {
    const Mongo_Connection_URI = process.env.MONGO
    try {
        await mongoose.connect(Mongo_Connection_URI);
        console.log("Connected to DB");
    } catch (err) {
        console.log(err);
    }
}

app.use(express.json())
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/products", productRoutes)

app.get('/', (req, res) => {
    res.send("Welcome to GIGIHPLAY API Server")
})

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    })
})

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0", () => {
    connect()
    console.log("Server runnting on port " + port)
    console.log("connected to Server!")
})