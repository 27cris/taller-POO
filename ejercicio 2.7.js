/* Ejercicio 7: Sistema de Cursos
Crea una clase Curso con atributos como nombreCurso y un arreglo de Estudiantes (usa la clase Estudiante del Ejercicio 1). Cada curso tendrá métodos para agregar estudiantes y calcular el promedio del curso en función de las calificaciones de los estudiantes. Hereda esta clase en subclases como CursoOnline y CursoPresencial.
*/

class Curso{

    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;  
        this.estudiantes = [];
    }
    agregarEstudiantes(estudiante) {
        this.estudiantes.push(estudiante);
    }
    calcularPromedioCurso() {
        let totalPromedio = 0;
        this.estudiantes.forEach(estudiante =>{
            totalPromedio += estudiante.calcularPromedio()
        })
        return totalPromedio / this.estudiantes.length;
    }
}
class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        return `
            Hola, persona: ${this.nombre}, tu edad es: ${this.edad}
        `;
    }
}

class Estudiante extends Persona {
    calificaciones;
    constructor(nombre, edad){
        super(nombre, edad);
        this.calificaciones = [];
    }
    agregarCalificaion(calificacion){ //calificacion debe ser un valor numerico
        if(calificacion){
            this.calificaciones.push( parseFloat(calificacion) )
        }else{
            return "Debes ingresar un valor valido";
        }
    }
    calcularPromedio(){
        if( this.calificaciones.length >= 2 ){
            let resultado = 0;
            this.calificaciones.map(calificacion => {
                resultado += calificacion
            })

            return resultado / this.calificaciones.length;
        }
        
    }
}

const perso1 = new Persona("Ramon Valdez", 58);
console.log(perso1.saludar());

const estu1 = new Estudiante("Sebastian Jirafales", 25);
console.log( estu1.saludar() );
estu1.agregarCalificaion(2.3);
estu1.agregarCalificaion(1.5);
estu1.agregarCalificaion(4.0);

console.log( estu1.calcularPromedio() )


///////////////
const promedioEstu1 = estu1.calcularPromedio(); 
console.log(`Promedio de ${estu1.nombre}:`, promedioEstu1);

const curso1 = new Curso("Matemáticas");

const estu2 = new Estudiante("Maria Lopez", 22);
estu2.agregarCalificaion(3.8);
estu2.agregarCalificaion(4.2);
estu2.agregarCalificaion(3.5);

curso1.agregarEstudiantes(estu1);
curso1.agregarEstudiantes(estu2);
