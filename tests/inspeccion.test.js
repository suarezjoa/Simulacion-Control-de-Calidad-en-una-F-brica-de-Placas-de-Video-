const { determinarEstadoLote, inspeccionPlacasMuestra } = require('../inspeccion');


test('inspeccionPlacasMuestra detects the correct number of defective plates for a small batch', () => {
    const placas = [0, 1, 0, 1, 1, 0, 0, 1, 1, 0];
    const numeroRamdom = [0, 0];
    const muestra = 5;

    const result = inspeccionPlacasMuestra(placas, numeroRamdom, muestra);
    expect(result).toBe(3);  // Adjust the expected value based on your logic
});

test('inspeccionPlacasMuestra detects the correct number of defective plates for a larger batch', () => {
    const placas = new Array(200).fill(0).map((_, i) => i % 10 === 0 ? 1 : 0);
    const numeroRamdom = [0, 1, 2];
    const muestra = 10;

    const result = inspeccionPlacasMuestra(placas, numeroRamdom, muestra);
    expect(result).toBe(1);  // Adjust the expected value based on your logic
});

test('determinarEstadoLote returns "Aprobado" when defect proportion is below threshold de la muestra', () => {
    const placas = [0, 1, 0, 1, 0, 0, 0, 1, 1, 0];
    const muestra = 5;
    const umbral = 0.5;
    const numeroRamdom = [0, 0];

    const result = determinarEstadoLote(placas, muestra, umbral, numeroRamdom);
    expect(result).toBe("Aprobado");
});

test('determinarEstadoLote returns "Rechazado" when defect proportion is above threshold', () => {
    const placas = [1, 1, 1, 1, 1, 0, 0, 1, 1, 0];
    const muestra = 5;
    const umbral = 0.5;
    const numeroRamdom = [0, 1];

    const result = determinarEstadoLote(placas, muestra, umbral, numeroRamdom);
    expect(result).toBe("Rechazado");
});
