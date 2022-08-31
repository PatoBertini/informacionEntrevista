// Instaciacion de promesa

const getData = new Promise((res, rej) => {
  return then((res)=> { console.log(res);})
});
getData.then(() => {
  console.log("salio todo ok");
});
getData.catch(() => {
  console.log(rej);
});
// Este ejemplo de arriba no esta chequeado, puede tener errores

function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor == 0) {
      reject("no se puede dividir por cero");
    } else {
      resolve(dividendo / divisor);
    }
  });
}

dividir(10, 1)
  .then((resultado) => {
    console.log(`resultado: ${resultado}`);
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });
