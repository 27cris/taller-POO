/* Ejercicio 3: Inventario de Productos
Define una clase Producto con atributos como nombre, precio y cantidadEnStock. Luego crea una clase Electrodomestico que herede de Producto y agregue un atributo adicional marca. Implementa un arreglo para almacenar varios productos y un método que liste aquellos que tienen una cantidad en stock menor a 10.
*/
class Producto{
    constructor(nombre, precio, cantidadEnStock){
        this.nombre = nombre;
        this.precio = precio
        this.cantidadEnStock = cantidadEnStock;
    }
}
class Electrodomesticos extends Producto{
    constructor(nombre, precio, cantidadEnStock, marca){
        super(nombre, precio, cantidadEnStock, marca)
        this.marca = marca;
    }
}

const Productos = [
    new Producto(`lapiz`, 0.5, 20),
    new Electrodomesticos(`refrigerador`, 800, 5, `samsung`),
    new Electrodomesticos('lavadora', 500, 8, 'LG'),
    new Producto('cuaderno', 2, 15),
    new Electrodomesticos('microondas', 150, 12, 'Panasonic'),
]

function listarProductosBajosStock(productos){
    return productos.filter(producto => producto.cantidadEnStock < 10);
}