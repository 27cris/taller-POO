/*Ejercicio 2: Zoológico
Crea una clase base llamada Animal con atributos como nombre y especie. Luego, crea clases derivadas como Leon, Elefante y Tigre que hereden de Animal. Cada clase derivada debe tener un método específico (por ejemplo, rugir() para Leon). Utiliza un arreglo para almacenar varios animales y crea un método para recorrerlos y hacer que cada uno ejecute su acción específica.
 */

class Animal{
    constructor(nombre, especie){
        this.nombre = nombre;
        this.especie = especie;
    }
    hacersonido(){
        return `${this.nombre} es un ${this.especie}`;
    }
}

class leon extends Animal{
    constructor(nombre){
        super(nombre, `Leon`);
    }
    rugir(){
        return `${this.nombre} ruge`
    }
}

class Elefante extends Animal{
    constructor(nombre){
        super(nombre, `Elefante`)
    }
    grita(){
        return `${this.nombre} grita`
    }
}

class Caballo extends Animal{
    constructor(nombre){
        super(nombre, `Caballo`)
    }
    relincha(){
        return `${this.nombre} relincha` 
    }
}


const animales = [
    new leon('Simba'),
    new Elefante ('coroso'),
    new Caballo ('rick')
]

function sonidosDeAnimales(animales){
    animales.forEach(animal =>{
        if(animal instanceof leon){
            console.log(animal.rugir())
        }else if(animal instanceof Elefante){
            console.log(animal.grita())
        }else if(animal instanceof Caballo){
            console.log(animal.relincha())
        }
    })
}
sonidosDeAnimales(animales);