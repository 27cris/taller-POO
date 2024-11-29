/* Ejercicio 9: Sistema de Transporte
Define una clase Transporte con atributos como capacidad y tipoCombustible. Luego, crea subclases como Autobus y Bicicleta que hereden de Transporte. Agrega métodos específicos, como arrancar() para Autobus. Usa un arreglo para almacenar varios medios de transporte y recorre el arreglo ejecutando una acción específica según el tipo de transporte.
*/

class Transporte{
    constructor(capacidad, tipoCombustible){
        this.capacidad = capacidad;
        this.tipoCombustible = tipoCombustible;
    }
}

class Autobus extends Transporte{
    constructor(capacidad, tipoCombustible){
        super(capacidad, tipoCombustible);
    }
    arrancar(){
        console.log("el autobus ya arranco")
    }
}

class Bicicleta extends Transporte{
    constructor(capacidad, tipoCombustible){
        super(capacidad, tipoCombustible)
    }
    pedalear(){
        console.log("la bicicleta se pedalea")
    }
}

const Transportes = [];
const autobus1 = new Autobus(30, "disel");
const bicicleta1 = new Bicicleta(1, "las piernas");

Transportes.push(autobus1);
Transportes.push(bicicleta1);

Transportes.forEach(Transporte =>{
    if(Transporte instanceof Autobus){
        Transporte.arrancar();
    } else if(Transporte instanceof Bicicleta){
        Transporte.pedalear()
    }
})