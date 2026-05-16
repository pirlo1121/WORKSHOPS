const { Router } = require('express');
const { createProduct, getProducts } = require('../controllers/product.controller');
const router = Router();

router.post('/createProduct' , createProduct );
router.get('/obtenerProductos' , getProducts );



module.exports = router