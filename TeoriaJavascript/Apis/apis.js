const array = [];
// Metodo Fetch es una forma mas nueva y simple de cumplir la misma funcion que Ajax. Esta basado en promesas, siempre nos devuelve una promesa encapsulada y hay que convertirla a un tipo de dato valido.

// Metodo GET = obtenemos info de una api
fetch("https://fakestoreapi.com/products")
  .then((dataRecibida) => dataRecibida.json())

  // esta respuesta es la api consumida pero en formato json, es una promesa encapsulada. (tenes que pasarla a cadena de texto por la funcion json() obtener los datos manejables)
  .then((data) => {
    array.push(data);
    console.log(array);
  }) // data es la info manejable (formato texto) que la pasas al array para poder trabajarlo normalmente
  .catch((error) => {
    console.log("salio todo mal", error);
  })
  .finally(() => console.log("Me ejecuto siempre, soy .finally"));




  //Fetch con async await
  async function cargarDatos() {

//Se ocupa la palabra await para simular sincronia, await espera a que la operacion termine para pasar a la siguiente actividad
const pedido = await fetch("https://jsonplaceholder.typicode.com/posts"); //guardamos los datos
const datosJson = await pedido.json(); //datosJson para transformar a json
}  