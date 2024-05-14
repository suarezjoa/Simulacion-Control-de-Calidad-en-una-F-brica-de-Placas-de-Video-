const minCuadMedios = require('./generadorSucesion');





function seleccionarMuestra(lote, tamanioMuestra) {
  // Clonar el lote original para no modificarlo directamente
  const loteClonado = [...lote];
  const muestra = [];
  
  // Seleccionar aleatoriamente placas del lote hasta alcanzar el tamaño de la muestra
  for (let i = 0; i < tamanioMuestra; i++) {
    // Obtener un índice aleatorio dentro del rango de placas disponibles
    const indiceAleatorio = Math.floor(Math.random() * loteClonado.length);
    
    // Extraer la placa del lote clonado y agregarla a la muestra
    const placaSeleccionada = loteClonado.splice(indiceAleatorio, 1)[0];
    muestra.push(placaSeleccionada);
  }
  
  return muestra;
}

function InicioFinMuestra(lote, numeroRamdom, tamanioMuestra) {

    let now = new Date();
    let hour = now.getHours().toString().padStart(2, "0");
    let minute = now.getMinutes().toString().padStart(2, "0");
    let second = now.getSeconds().toString().padStart(2, "0");
    let hora_actual = hour + minute + second;
    let semillaHora = parseInt(hora_actual.substr(-4));


    let i = 0;
    if (lote.length < 100) {

      let x1 = numeroRamdom[i];
      let x2 = numeroRamdom[i+1];
      let numeroInicio = unirValores2(x1, x2);
      let numeroFinal = numeroInicio + tamanioMuestra;
  
      if (lote.length <= numeroInicio) {
            
        return InicioFinMuestra(lote, minCuadMedios(100, semillaHora), tamanioMuestra);
      } else if (lote.length < numeroFinal) {
        // Caso recursivo: el lote está entre numeroInicio y numeroFinal
        return InicioFinMuestra(lote, minCuadMedios(100, semillaHora), tamanioMuestra);
      } else {
        // Caso base: el lote es mayor que numeroFinal
        return {numeroInicio, numeroFinal};
      }
  
    } else if (lote.length === 100) {



      let x1 = numeroRamdom[i];
      let x2 = numeroRamdom[i+1];
      let numeroInicio = unirValores2(x1, x2);
      let numeroFinal = numeroInicio + tamanioMuestra + 1;
  
      if (lote.length <= numeroInicio) {

        return InicioFinMuestra(lote, minCuadMedios(100, semillaHora), tamanioMuestra);
    
      } else if (lote.length < numeroFinal) {

        return InicioFinMuestra(lote, minCuadMedios(100, semillaHora), tamanioMuestra);
      } else {
        numeroFinal = numeroFinal-1;
        // Caso base: el lote es mayor que numeroFinal
        return {numeroInicio, numeroFinal};
      }
  
    }
  }

function unirValores2(x1, x2) {
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

  function unirValores3(x1, x2, x3) {
    // Convertir los valores a cadenas de texto
    let stringX1 = x1.toString();
    let stringX2 = x2.toString();
    let stringX3 = x3.toString();
  
    // Completar con ceros a la izquierda si es necesario
    while (stringX1.length < 1) {
      stringX1 = "0" + stringX1;
    }
    while (stringX2.length < 1) {
      stringX2 = "0" + stringX2;
    }
    while (stringX3.length < 1) {
      stringX3 = "0" + stringX3;
    }
  
    // Unir las cadenas de texto y convertir a número
    return parseInt(stringX1 + stringX2 + stringX3);
  }



module.exports = InicioFinMuestra;