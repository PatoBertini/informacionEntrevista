fetch("url")
  .then((respuesta) => respuesta.json()) // esta respuesta es la api consumida pero en formato json (tenes que pasarla por la funcion json() obtener los datos manejables)
  .then((data) => console.log(data)) // data es la info manejable que la pasas al array para poder trabajarlo normalmente
  .catch((error) => {
    console.log("salio todo mal", error);
  });
