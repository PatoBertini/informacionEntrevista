// Operaciones habituales
let frutas = ["manzana", "pera", "sandia"];

// Acceder a un elemento del array mediante su indice
let primero = frutas[0];
console.log(primero);

let ultimo = frutas[frutas.length - 1];
console.log(ultimo);

// Recorrer un array
frutas.forEach((elemento, indice) => {
  console.log(elemento, indice);
});

// Añadir un elemento al final de un array
let nuevoElemento = frutas.push("melocoton");
console.log(frutas);

// Eliminar el último elemento de un Array
let eliminarElemento = frutas.pop("melocoton");
console.log(frutas);

// Añadir un elemento al principio de un Array
let nuevoElementoAlInicio = frutas.unshift("frutilla");
console.log(frutas);

// Eliminar el primer elemento de un Array
let eliminarElementoUno = frutas.shift("melocoton");
console.log(frutas);

// Encontrar el índice de un elemento del Array
// let pos = frutas.indexOf('pera')
// console.log(pos);

// Eliminar un único elemento mediante su posición - metodo Splice

let elementoEliminado = frutas.splice(2,2,)
console.log(frutas);

// Eliminar varios elementos a partir de una posición

let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']
console.log(vegetales)

let pos = 1, numElementos = 2

let elementosEliminados = vegetales.splice(pos, numElementos)
console.log(vegetales)

// Copiar un Array
let copiaArray = vegetales.slice();
console.log(copiaArray);

// Array metodos instanciados
// at()
const arrayNumber = [5, 12, 8, 130, 44];

let index = 2;

console.log(arrayNumber.at(index))

// concat()
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

// join()
console.log(array2.join('-'))

console.log(array3);

// filter()
const words = ['spray', 'matuma', 'telio', 'jamoniberico']
const result = words.filter(element => element.length>5)
console.log(result);

function esMayorQue(valor){
    return valor >= 10
}


let filtrado = [12,4,56,74,3,2,3,55,33,23]
let resultado = filtrado.filter(esMayorQue)
console.log(resultado);

const numeros = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function esPrimo(num) {
    for (let i = 2; num > i; i++) {
        if (num % i == 0) {
            return false
        }
        
    }
    return num > 1
}
console.log(numeros.filter(esPrimo));

// find()
const numeritos = [5, 12, 8, 130, 44];

const found = numeritos.find(element => element > 10);
console.log(found);


const inventory = [
    {name: 'apples', quantity: 2, proveedor: 'misaplas'},
    {name: 'bananas', quantity: 0, proveedor: 'adagio'},
    {name: 'cherries', quantity: 5, proveedor: 'fruit'}
  ];

  console.log(inventory.find((elemento, indice, array)=>{
    console.log(elemento);
    console.log(indice);
    console.log(array);
  }))

// some()
console.log(inventory.some(productos=>productos.name == 'bananas'));

// includes()
console.log(inventory.includes(numeritos));

//map()
console.log(inventory.map(nombres=>nombres.name));


  function hayCerezas(fruta){
    return fruta.name === 'cherries'
  }
  console.log(inventory.find(hayCerezas));

  // indexOf()
  console.log(numeritos.indexOf(44));
