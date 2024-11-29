/*Ejercicio 8: Biblioteca
Crea una clase base Libro con atributos como titulo y autor. Luego, crea clases derivadas como LibroDigital y LibroFisico, cada una con atributos adicionales específicos. Utiliza un arreglo para almacenar libros y un método para listar todos los libros de un autor específico.
 */

class Libro{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}

class LibroDigital extends Libro{
    constructor(titulo, autor, formato){
        super(titulo, autor)
        this.formato = formato;
    }
}

class LibroFisico extends Libro{
    constructor(titulo, autor, generoLibro){
        super(titulo, autor);
        this.generoLibro = generoLibro;
    }
}
//////////////////
class Biblioteca{
    constructor(){
        this.libros = []
    }
    agregarLibro(libro){
        this.libros.push(libro);
    }
    libroPorAutor(autor){
        return this.libros.filder(Libro => libro.autor === autor);
    }
}
const Biblioteca = new Biblioteca();
const libro1 = new LibroDigital('100 años de soledad', 'Gabriel Garcias Marques', 'PDF')
const libro2 = new LibroFisico('el quijote', 'Migel de Cervantes', 'literario')
Biblioteca.agregarLibro(libro1);
Biblioteca.agregarLibro(libro2);
