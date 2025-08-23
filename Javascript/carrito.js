export function calcularPrecio(productos){
    return productos.reduce((total,p )=> total + p.price , 0)
}

export function descuento(precio, porcentaje){
    return precio - ( precio * porcentaje )/ 100
}
