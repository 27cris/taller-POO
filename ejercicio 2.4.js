/*Ejercicio 4: Sistema de Empleados
Crea una clase Empleado con atributos como nombre y sueldo. Luego, crea clases derivadas como EmpleadoTiempoCompleto y EmpleadoMedioTiempo. Cada tipo de empleado tendrá un método para calcular el sueldo total en función de las horas trabajadas. Utiliza un arreglo para almacenar diferentes tipos de empleados y muestra sus sueldos.
*/

class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    calcularSueldo(horasTrabajadas){
        return this.sueldo * horasTrabajadas;
    }
}

class EmpleadoTiempoCompleto extends Empleado{
    constructor(nombre, sueldo){
        super(nombre, sueldo);
    }
    calcularSueldo(horasTrabajadas){
        return horasTrabajadas * this.sueldo
    }
}



class EmpleadoMedioTiempo extends Empleado{
    constructor(nombre, sueldo){
        super(nombre, sueldo);
    }
    calcularSueldo(horasTrabajadas){
        return horasTrabajadas * this.sueldo * 0.5
    }
}

const empleados = [
    new EmpleadoTiempoCompleto('juan', 40),
    new EmpleadoMedioTiempo('andres', 20)
];

function mostrarSueldos(empleados, horasTrabajadas){
    empleados.forEach(empleado => {
        let sueldoTotal = empleado.calcularSueldo(horasTrabajadas);
        console.log(`${empleado.nombre}, horas trabajadas: ${horasTrabajadas} = $${sueldoTotal}`)
    })
}
mostrarSueldos(empleados, 3200)