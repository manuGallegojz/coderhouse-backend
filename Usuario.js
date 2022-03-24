class Usuario{
    constructor(opciones){
        this.nombre = opciones.nombre;
        this.apellido = opciones.apellido;
        this.libros = opciones.libros;
        this.mascotas = opciones.mascotas;
    }

    getFullName(){

        return "Mi nombre completo es " + this.nombre + " " + this.apellido;

    }

    addMascota(nombre){
        this.mascotas.push(nombre);

        return "El nombre de mi mascota es " + nombre + ". Mis tíos tienen 3 perros llamados " + this.mascotas[0] + ", " + this.mascotas[1] + " y " + this.mascotas[2];
    }

    countMascotas(){

        return "Yo tengo " + this.mascotas.length + " mascotas"; 

    }

    addBook(autor, titulo){

        let nuevoObjeto = {
            autor: autor,
            titulo: titulo
        }

        this.libros.push(nuevoObjeto);

        let posicionLibro = this.libros[this.libros.length-1];

        return "Mi libro favorito es " + posicionLibro.titulo + " y su autor es " + posicionLibro.autor;

    }

    getBookNames(){

        let librosAutores = [];

        let i=0;

        while(this.libros.length > i){

        librosAutores.push(this.libros[i].titulo)

        i++;
        }
        
        return librosAutores

    }
}

let nuevoObjeto = {
    nombre: "Manuel",
    apellido: "Gallego",
    libros: [{titulo: "Steve Jobs ", autor:"Walter Isaacsoon"}, {titulo: "Yo, Robot ", autor:"Isaac Asimov"}, {titulo: "Ready Player One ", autor:"Ernest Cline"}],
    mascotas: ["Fraco", "Osvaldo", "Olivia"]
}

let nuevoUsuario = new Usuario(nuevoObjeto)

let ul = $("<ul>").addClass("list-unstyled");

let lista = $(`
    <li> ${nuevoUsuario.getFullName()} </li>
    <li> ${nuevoUsuario.addMascota("Rolfi")} </li>
    <li> ${nuevoUsuario.countMascotas()} </li>
    <li> ${nuevoUsuario.addBook("George Orwell", "1984")} </li>
    <li> ${nuevoUsuario.getBookNames()} </li>`);

    ul.append(lista)

$(".container").append(ul)