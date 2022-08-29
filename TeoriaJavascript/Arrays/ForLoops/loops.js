// agrega utilizando un for let of a tus archivos.
// 1 declara array con archivos
// 2 declara array vacio
// 3 haz el for; declaramos var trim, if con su var indexada y push

// const files = ['index.html', '  ', '   foo.txt']
// const filePaths = []

// for (const file of files) {
//     let fileName = file.trim()
//     if (fileName) {
//         const filePath = `./desktop/${fileName}`
//         filePaths.push(filePath)
//     }
// }

// console.log(filePaths);
// return: ['./desktop/index.html', './desktop/foo.txt']


// Reduce -> ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor
const files = ["index.html", "  ", "   foo.txt"];
const filePaths = files.reduce((acc, file) => {
  const fileName = file.trim();
  if (fileName) {
    const filePath = `./desktop/${fileName}`;
    acc.push(filePath);
  }
  return acc
},[]);// [Es el valor inicial del .reduce()]
console.log(filePaths);
