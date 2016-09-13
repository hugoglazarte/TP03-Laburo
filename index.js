/**
 * Created by Usuario on 13/09/2016.
 */
alert("Hola mundo");

function Pelicula(id, titulo, descripcion, año, duracion, actores, director){

    //atributos
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.año = año;
    this.duracion = duracion;
    this.actores = actores;
    this.director = director;

    //metodos
    // function agregarActor(actor) {
    //     this.actores.push(actor);
    // }

    this.agregarActor = function(actor) {
        var arrayActores = [];
        this.actores = this.actores.push(actor);
    }

    this.saludar = function() {
        alert('Hola Gatoooo');
    }

}

var arrayActores = [];

var elPadrinoB = new Pelicula(1,'El Padrino','Película estadounidense de 1972',1972,175,arrayActores,'Francis Ford Coppola');

elPadrinoB.saludar();
