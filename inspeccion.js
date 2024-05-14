function inspeccionPlacasMuestra(placas, muestra) {
    let placasMuestra = placas.slice(muestra.numeroInicio, muestra.numeroFinal);
    let placasDefectuosas = 0;

    // Recorrer la muestra de placas y contar las defectuosas
    for (let i = 0; i < placasMuestra.length; i++) {
        if (placasMuestra[i] === 1) {
            placasDefectuosas++;
        }
    }

    return placasDefectuosas;
}

// Función para calcular la proporción de placas defectuosas en la muestra
function calcularProporcionDefectuosasMuestra(placas, muestra) {
    let placasDefectuosas = inspeccionPlacasMuestra(placas, muestra);
    let total = muestra.numeroFinal - muestra.numeroInicio;
    let proporcionDefectuosas = placasDefectuosas / total;

    return proporcionDefectuosas;
}
function determinarEstadoLote(placas, muestra, umbral) {
    // Calcular la proporción de placas defectuosas en la muestra
    let proporcionDefectuosas = calcularProporcionDefectuosasMuestra(placas, muestra);

    // Determinar el estado del lote basado en el umbral
    if (proporcionDefectuosas <= umbral) {
        return "Aprobado";
    } else {
        return "Rechazado";
    }
}

module.exports = determinarEstadoLote;