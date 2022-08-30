const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes; // -> con las primeras comas estas evitando las primeras posiciones del array
console.log(p3); // -> trunks

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("holamundo");
    },
  ];
};

const [nombre, setNombre] = useState("goku");

console.log(nombre);
setNombre();
