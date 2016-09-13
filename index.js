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

    function saludar() {
        alert('Hola Gato');
    }

}

var arrayActores = [];

var elPadrinoB = new Pelicula(1,'El Padrino','El padrino es una película estadounidense de 1972',1972,
    175,arrayActores);

elPadrinoB.saludar();
