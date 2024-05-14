let now = new Date();
let hour = now.getHours().toString().padStart(2, "0");
let minute = now.getMinutes().toString().padStart(2, "0");
let second = now.getSeconds().toString().padStart(2, "0");
let hora_actual = hour + minute + second;
let semillaHora = parseInt(hora_actual.substr(-4));

function unirValores(x1, x2) {
    // Convertir los valores a cadenas de texto
    let stringX1 = x1.toString();
    let stringX2 = x2.toString();
  
    // Completar con ceros a la izquierda si es necesario
    while (stringX1.length < 1) {
      stringX1 = "0" + stringX1;
    }
    while (stringX2.length < 1) {
      stringX2 = "0" + stringX2;
    }

    // Unir las cadenas de texto y convertir a número
    return parseInt(stringX1 + stringX2);
  }

  function generarLote(SecuenciaAleatoria,probabilidadDefecto) {

    // Inicializar variables
    let lote = [];
  
    // Recorrer la secuencia aleatoria de 2 en 2
    for (let i = 0; i < SecuenciaAleatoria.length; i += 2) {
      // Obtener los 3 valores aleatorios
      let x1 = SecuenciaAleatoria[i];
      let x2 = SecuenciaAleatoria[i + 1];
  
      // Unir los valores x1, x2 y agregar al lote.
      let numeroUnido = unirValores(x1, x2)/100;
      if (  probabilidadDefecto >= numeroUnido){
        lote.push(1)
      }else{
        lote.push(0)
      }
    }
    return lote;
  }

  module.exports = generarLote;