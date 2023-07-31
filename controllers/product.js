import { createError } from '../error.js';
import Product from '../models/Product.js';

export const getAllProductByVideoId = async (req, res, next) => {
    try {
        const videoId = req.params.videoId;

        const product = await Product.find({ videoId: videoId });
        if (!product) {
            return next(createError(404, "Product not found"));
        }
        res.status(200).send(product);

    } catch (error) {
        next(error);
    }
}

export const addProductById = async (req, res, next) => {
    try {
        const product = {
            videoId: req.params.videoId,
            productTitle: req.body.productTitle,
            productPrice: req.body.productPrice,
            productImg: req.body.productImg,
            productUrl: req.body.productUrl,
            desc: req.body.desc,
        }
        const newProduct = await new Product(product);
        await newProduct.save();
        res.status(200).send(newProduct);

    } catch (error) {
        next(createError(error));
    }
}