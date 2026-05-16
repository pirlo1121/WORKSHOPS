import mongoose from "mongoose";


const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true

        },
        price: {
            type: Number,
            required: true,
            min: 0,
            max: 1000
        },
        description: String,
        stock: Number,
        imagen: String
    }
)

export const Product = mongoose.model('products', productSchema) ;