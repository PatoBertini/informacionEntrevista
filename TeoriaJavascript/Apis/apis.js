//llamada a la API con fetch
fetch("url")
  .then((respuesta) => respuesta.json()) // esta respuesta es la api consumida pero en formato json (tenes que pasarla por la funcion json() obtener los datos manejables)
  .then((data) => console.log(data)) // data es la info manejable que la pasas al array para poder trabajarlo normalmente
  .catch((error) => {
    console.log("salio todo mal", error);
  });


  //Fetch con async await
  async function cargarDatos() {

    //Se ocupa la palabra await para simular sincronia, await espera a que la operacion termine para pasar a la siguiente actividad
    const pedido = await fetch("../json/ferreteria.json"); //guardamos los datos de los productos de ferreteria
    const datosJson = await pedido.json(); //datosJson para transformar a json
  }  
