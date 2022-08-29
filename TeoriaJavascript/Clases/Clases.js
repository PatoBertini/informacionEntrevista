// Declaramos un array vacio donde vamos a pushear cada nuevo usuario
let usuarios = [];

// Instanciacion  de clases

// Dentro del constructor la info que le pasamos puede ser cualquier cosa, string, array, objeto
class Usuario {
  constructor(nombre, apellido, libros = [], mascotas = []) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  // Estos son metodos de una clase. 
  getFullName() {
    return `Su nombre de usuario es ${this.nombre} y su apellido es ${this.apellido}`;
  }
  addMascota(animal) {
    return this.mascotas.push(animal);
  }
  countMascotas() {
    return this.mascotas.length;
  }
  addBook(name, author) {
    return this.libros.push({
      nombre: name,
      autor: author,
    });
  }
  getBookNames() {
    return this.libros.map((libro) => libro.autor);
  }
}

// Declaramos los nuevos usuarios y los pushiamos a la clase.
const persona1 = new Usuario(
  "El pepe",
  "Rodriguez",
  [
    { nombre: "narnia", autor: "don telio" },
    { nombre: "spider-man", autor: "peter parker" },
  ],
  ["perro", "gato", "jirafa"]
);
const persona2 = new Usuario(
  "El manonlo",
  "abismal",
  [
    { nombre: "piratas del cariber", autor: "jack sparrow" },
    { nombre: "batman", autor: "bruce waine" },
  ],
  ["escarabajo", "lombriz", "rata"]
);
// Otra forma de instanciar un objeto y asociarlo al array. A este lo guarde en el array usuario
usuarios.push(new Usuario('jose','mastudik',[{nombre: 'lotr', autor:'jriwujd'}],['kaguro','leon','saltamonte']))
usuarios.push(new Usuario('juan','liperdk',[{nombre: 'kamion', autor:'libano'}],['rata','lagarto','pollo']))
// Recorremos el array usuarios para obtener su informacion
for (let i = 0; i < usuarios.length; i++) {
    // console.log(usuarios[i]);
    console.log(`El nombre de usuario es ${usuarios[i].nombre} su apellido es ${usuarios[i].apellido}, sus mascotas son ${usuarios[i].mascotas} `);
    
}

// persona1.addBook("probando", "libro");
// console.log(persona1);
// console.log(usuarios);

// console.log(persona1.countMascotas())
// console.log(persona2.getBookNames())
// console.log(persona2.getFullName())
// persona1.addMascota('pejelagarto')
// console.log(persona1.countMascotas())
