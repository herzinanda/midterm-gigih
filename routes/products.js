import express from 'express';
import { addProductById, getAllProductByVideoId } from '../controllers/product.js';

const router = express.Router();

router.get("/:videoId", getAllProductByVideoId);
router.post("/:videoId", addProductById);

export default router;