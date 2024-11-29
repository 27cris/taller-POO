/* Ejercicio 10: Tienda de Mascotas
Crea una clase base Mascota con atributos como nombre y tipo. Luego, crea clases derivadas como Perro y Gato, agregando métodos específicos para cada animal, como ladrar() y maullar(). Utiliza un arreglo para almacenar varias mascotas y un método para hacer que cada mascota realice su acción.
*/
class Mascota{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
}

class Perro extends Mascota{
    constructor(nombre, tipo){
        super(nombre)
    }
    ladrar(){
        console.log(`el perro ${this.nombre} ladra`)
    }
}
class Gato extends Mascota{
    constructor(nombre, tipo){
        super(nombre)
    }
    maullar(){
        console.log(`el gato ${this.nombre} maulla`)
    }
}

const mascotas = []
const perro1 = new Perro("firulais")
const Gato1 = new Gato("tom")

mascotas.push(perro1);
mascotas.push(Gato1);

mascotas.forEach(mascotas =>{
    if(mascotas instanceof Perro){
        mascotas.ladrar();
    }else if(mascotas instanceof Gato){
        mascotas.maullar();
    }
})