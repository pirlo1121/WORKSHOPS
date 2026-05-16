const { Schema , model } = require('mongoose');

const productSchema = new Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
    categoria: String,
    disponibilidad: Boolean
});

const ProductModel = model('Product' , productSchema );

module.exports = ProductModel

