const fs = require("fs");
const path = __dirname + "/bicicletas.json";
function leerLista() {
  const json = fs.readFileSync(path, "utf-8");
  const array = JSON.parse(json);
  return array;
}
let arrayBicicletas = leerLista();
//console.log(arrayBicicletas);

module.exports = arrayBicicletas;
