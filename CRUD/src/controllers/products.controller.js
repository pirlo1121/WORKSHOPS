import { Product } from "../models/products.models.js";


 //                        solicitud , respuesta 
export async function getProducts(req, res) {
    try {
        const products = await Product.find()
        res.status(200).json({ok: true, products})

    } catch (error) {
        res.status(500).json({ok: false, msg: ' error'})
    }
}

export async function createProduct(req, res) {
    try {
        const data = req.body;
        // const product = await Product.create(data);

        const product =  new Product(data);
        await product.save();

        res.status(201).json({ok: true, product})
        
    } catch (error) {
        res.status(500).json({ok: false, msg: ' error'})
        
    }
}

export async function updateProduct(req, res) {
    try {
        const id = req.params.id
        const data = req.body;

        const product = await Product.findByIdAndUpdate(id, data, {new: true});

        res.status(201).json({ok: true,msg: 'PRODUCTO ACTUALIZADO', product})

    } catch (error) {
        res.status(500).json({ok: false, msg: ' error'})
    }
}