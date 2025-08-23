import { createProduct } from './products.js'
import { createUser } from './users.js'
import { calcularPrecio, descuento } from './carrito.js'

let user1 = createUser("juan" , "juan@gmail.com")
let user2 = createUser("maria", "maria@gmail.com")

let product1 = createProduct("zapatos", 500)
let product2 = createProduct("gorra", 100)
let product3 = createProduct("camara", 1500)
let product4 = createProduct("audifonos", 900)
let product5 = createProduct("pc", 2500)

let carrito = [product1, product2, product3, product4, product5];

let precioTotal = calcularPrecio(carrito)
let precioDescuento = descuento(precioTotal, 20);

// console.log('precio total: ' + precioTotal)
// console.log('precio con descuento: ' + precioDescuento)

let mercado1 = createProduct("arroz", 20)
let mercado2 = createProduct("leche", 30)
let mercado3 = createProduct("pasta", 40)

let carritoMercado = [mercado1,mercado2,mercado3]
let precioMercado = calcularPrecio(carritoMercado)
let descuentoMercado = descuento(precioMercado, 50)

console.log('precio total del mercado: ' + precioMercado)
console.log('precio con descuento del mercado: ' + descuentoMercado)
