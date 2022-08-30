const persona = {
  nombre: "goku",
  edad: 18,
  clave: "Sayain",
};

console.log(persona.nombre); // En este caso para poder entrar a un objeto usamos persona.nombre -> goku

const { nombre, edad, clave } = persona; // -> con los { estamos extrayendo la informacion de adentro de persona}

console.log(nombre, edad, clave); // -> Aca no hace falta entrar con persona.nombre por que desestructuramos el objeto

// const retornaPersona = (usuario) => {
//   console.log(usuario);
// };

// retornaPersona(persona)// -> esta funcion devuelve el objeto persona

// desestructuracion desde el argumento
const retornaPersona = ({ nombre, edad, clave }) => {
  console.log(nombre, edad, clave);
};

retornaPersona(persona);
