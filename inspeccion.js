function inspeccionPlacasMuestra(placas,numeroRamdom,muestra) {
    let placasDefectuosas = 0;
    let aux = 0;
    if (placas.length <= 100) {
        let x1 = numeroRamdom[0];
        let x2 = numeroRamdom[1];
        let numeroInicio = unirValores2(x1, x2);
        console.log("numero de inicio", numeroInicio);
        let CantidadMuestra = numeroInicio + muestra;
        if (numeroInicio <= 100){
            for (let i = numeroInicio; i < CantidadMuestra; i++) {
                if ( numeroInicio <= 100 ) {
                    if(placas[i] === 1){
                        placasDefectuosas++;
                    }
                }else if (100 < numeroInicio ){
                    if (placas[aux] === 1){
                        aux++;
                        placasDefectuosas++;
                    }
                }
            }
        }else {
            numeroInicio = 0;
            for (let i = numeroInicio; i < CantidadMuestra; i++) {
                if ( numeroInicio <= 100 ) {
                    if(placas[i] === 1){
                        placasDefectuosas++;
                    }
                }else if (100 < numeroInicio ){
                    if (placas[aux] === 1){
                        aux++;
                        placasDefectuosas++;
                    }
                }
            }
        }
    }
    if (100 < placas.length && placas.length <= 1000) {
        let x1 = numeroRamdom[0];
        let x2 = numeroRamdom[1];
        let x3 = numeroRamdom[2];
        let numeroInicio = unirValores3(x1, x2,x3);
        let CantidadMuestra = numeroInicio + muestra;
        if (numeroInicio <= 1000){
            for (let i = numeroInicio; i < CantidadMuestra; i++) {
                if ( numeroInicio <= 100 ) {
                    if(placas[i] === 1){
                        placasDefectuosas++;
                    }
                }else if (100 < numeroInicio ){
                    if (placas[aux] === 1){
                        aux++;
                        placasDefectuosas++;
                    }
                }
            }
        }else {
            numeroInicio = 0;
            for (let i = numeroInicio; i < CantidadMuestra; i++) {
                if ( numeroInicio <= 100 ) {
                    if(placas[i] === 1){
                        placasDefectuosas++;
                    }
                }else if (100 < numeroInicio ){
                    if (placas[aux] === 1){
                        aux++;
                        placasDefectuosas++;
                    }
                }
            }
        }
    }

    return placasDefectuosas;
}

// Función para calcular la proporción de placas defectuosas en la muestra
function calcularProporcionDefectuosasMuestra(placas, muestra,numeroRamdom) {
    let placasDefectuosas = inspeccionPlacasMuestra(placas,numeroRamdom,muestra);
    let proporcionDefectuosas = placasDefectuosas / muestra;

    return proporcionDefectuosas;
}
function determinarEstadoLote(placas, muestra, umbral,numeroRamdom) {
    // Calcular la proporción de placas defectuosas en la muestra
    let proporcionDefectuosas = calcularProporcionDefectuosasMuestra(placas, muestra,numeroRamdom);

    // Determinar el estado del lote basado en el umbral
    if (proporcionDefectuosas <= umbral) {
        return "Aprobado";
    } else {
        return "Rechazado";
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


  function validarLote(){
    
  }



module.exports = {determinarEstadoLote,inspeccionPlacasMuestra}