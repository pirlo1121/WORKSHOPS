const ProductModel = require("../models/product.model");


async function createProduct(req, res){
    try {
        const data = req.body;
        await ProductModel.create(data);

        res.send('El producto se creó correctamente')

        
    } catch (error) {
        console.log('error: ' , error );
        res.send('Hubo un error al crear un producto')
        
    }
}

async function getProducts(req, res){

    try {
        const data = await ProductModel.find();
        res.json({msg: 'PRODUCTOS', data})
        
    } catch (error) {
         console.log('error: ' , error );
        res.send('Hubo un error al obtener un producto')
    }

}
module.exports = { createProduct , getProducts}