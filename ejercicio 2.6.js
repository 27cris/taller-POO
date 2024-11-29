/*Ejercicio 6: Catálogo de Vehículos
Crea una clase base Vehiculo con atributos como marca, modelo y año. Luego, crea clases derivadas como Auto y Moto que hereden de Vehiculo. Agrega métodos específicos a cada clase, como conducir() en Auto. Usa un arreglo para almacenar vehículos y crea un método que los liste según su tipo.
*/

class Vehiculo{
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    mostrarDetalles(){
        return `${this.marca} ${this.modelo} (${this.año})`
    }
}


class Auto extends Vehiculo{
    constructor(marca, modelo, año){
        super(modelo, marca, año)
        this.puertas = this.puertas
    }
    conducir(){
        console.log(`el carro de ${this.mostrarDetalles} con ${this.puertas} puertas`)
    }
}

class Moto extends Vehiculo{
    constructor(marca, modelo, año){
        super(marca, modelo, año)
    }
    acelerar(){
        console.log(`la moto de ${this.mostrarDetalles}`)
    }
}

let almacen = []
function agregarVehiculos(Vehiculo){
    almacen.push(Vehiculo);
}
function listaVehiculos(){
    almacen.forEach(Vehiculo =>{
        if(Vehiculo instanceof Auto){
            console.log(`Auto: ${Vehiculo.marca} ${Vehiculo.modelo} ${Vehiculo.año}`)
        } else(Vehiculo instanceof Moto);{
            console.log(`moto: ${Vehiculo.marca} ${Vehiculo.modelo} ${Vehiculo.año}`)
        }
    })
}

const auto1 = new Auto('toyota', 'corolla', 2000);
const moto2 = new Moto('yamaha', 'mt-07', 2021)
agregarVehiculos(auto1)
agregarVehiculos(moto2)
listaVehiculos();






