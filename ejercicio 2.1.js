// /*Ejercicio 1: Gestión de Estudiantes
// Crea una clase Persona con atributos básicos como nombre, edad y un método saludar(). Luego crea una clase Estudiante que herede de Persona y agregue un atributo calificaciones (un arreglo). Añade métodos para agregar una calificación y calcular el promedio del estudiante.
//  */

class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        return `hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`
    }
}

class Estudiante extends Persona{
    constructor(nombre, edad,){
        super(nombre, edad); //llamar al constructor de la clase padre
        this.calificaciones = []
    }
    agregarCalificacion(calificacion){
        this.calificaciones.push(calificacion)
    }
    calcularPromedio(){
        let suma = this.calificaciones.reduce((acc, val) => acc + val, 0);
        return suma / this.calificaciones.length;
    }
}

let estudiante1 = new Estudiante("ana", 20);
console.log(estudiante1.saludar())// "Hola, mi nombre es Ana y tengo 20 años."

estudiante1.agregarCalificacion(50);
estudiante1.agregarCalificacion(30);
estudiante1.agregarCalificacion(40);

console.log(estudiante1.calificaciones);
console.log(estudiante1.calcularPromedio());

///////////////////////////////////////////////////////////////////////
/*Ejercicio 1: Gestión de Estudiantes
Crea una clase Persona con atributos básicos como nombre, edad y un método saludar(). Luego crea una clase Estudiante que herede de Persona y agregue un atributo calificaciones (un arreglo). Añade métodos para agregar una calificación y calcular el promedio del estudiante.
 */
