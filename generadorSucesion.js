function minCuadMedios(CantidadNumerosSucecion, semilla) {
  let now = new Date();
  let hour = now.getHours().toString().padStart(2, "0");
  let minute = now.getMinutes().toString().padStart(2, "0");
  let second = now.getSeconds().toString().padStart(2, "0");
  let hora_actual = hour + minute + second;
  let semillaHora = parseInt(hora_actual.substr(-4));
  
  let numerosGenerados = [];
  CantidadNumerosSucecion = CantidadNumerosSucecion * 2;
  let contadorIteraciones = 0;

  while (numerosGenerados.length < CantidadNumerosSucecion) {
      if (contadorIteraciones < 5) {
          semilla = parseInt((semilla * semilla).toString().padStart(8, "0").substr(2, 4));
          contadorIteraciones++;
      } else {
          semilla = semilla * semillaHora; // Variar la semilla multiplicándola por el valor de la hora actual
      }

      let numString = semilla.toString();
      
      for (let j = 0; j < numString.length && numerosGenerados.length < CantidadNumerosSucecion; j++) {
          numerosGenerados.push(parseInt(numString[j]));
      }
  }
  
  // Filtrar cualquier valor NaN del arreglo generado
  numerosGenerados = numerosGenerados.filter(num => !isNaN(num));
  
  // Si aún hay valores NaN después de la filtración, generar más números aleatorios
  while (numerosGenerados.length < CantidadNumerosSucecion) {
      semilla = parseInt((semilla * semilla).toString().padStart(8, "0").substr(2, 4));
      let numString = semilla.toString();
      for (let j = 0; j < numString.length && numerosGenerados.length < CantidadNumerosSucecion; j++) {
          numerosGenerados.push(parseInt(numString[j]));
      }
  }
  
  return numerosGenerados.slice(0, CantidadNumerosSucecion); // Recortar el arreglo para asegurarse de que tenga la longitud correcta
}

module.exports = minCuadMedios;
