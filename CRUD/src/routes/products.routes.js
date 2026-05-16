import express from 'express';
import { createProduct, getProducts, updateProduct } from '../controllers/products.controller.js';
const router = express.Router();


router.get('/products', getProducts);
router.post('/createProduct', createProduct);
router.put('/updateProduct/:id', updateProduct );



export default router;