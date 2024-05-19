const { unirValores, generarLote } = require('../generacionLote');

describe('unirValores', () => {
    test('should correctly join two single-digit numbers', () => {
        let x1 = "1";
        let x2 = "2";
        const result = unirValores(x1, x2);
        expect(result).toBe(12);
    });

    test('should correctly join a single-digit number and a multi-digit number', () => {
        const result = unirValores(1, 23);
        expect(result).toBe(123);
    });

    test('should correctly join two multi-digit numbers', () => {
        const result = unirValores(12, 34);
        expect(result).toBe(1234);
    });

    test('should handle leading zeros correctly', () => {
        const result = unirValores(0, 4);
        expect(result).toBe(4);
    });
});

describe('generarLote', () => {
    test('should generate a lote based on probability defect threshold', () => {
        const SecuenciaAleatoria = [1, 2, 5, 6, 7, 8, 3, 4];
        const probabilidadDefecto = 0.5;
        const toleTotal = 4;
        // unirValores(1, 2) / 100 = 0.12, unirValores(5, 6) / 100 = 0.56, unirValores(7, 8) / 100 = 0.78, unirValores(3, 4) / 100 = 0.34
        const expectedLote = [1, 0, 0, 1]; // Based on the threshold of 0.5

        const result = generarLote(SecuenciaAleatoria, probabilidadDefecto, toleTotal);
        expect(result).toEqual(expectedLote);
    });

    test('should handle odd length sequences correctly', () => {
        const SecuenciaAleatoria = [1, 2, 5, 6, 7];
        const probabilidadDefecto = 0.5;
        const toleTotal = 3;
        // unirValores(1, 2) / 100 = 0.12, unirValores(5, 6) / 100 = 0.56, unirValores(7, _) -> Last value is ignored
        const expectedLote = [1, 0]; // Based on the threshold of 0.5 and only 2 pairs are considered

        const result = generarLote(SecuenciaAleatoria, probabilidadDefecto, toleTotal);
        expect(result).toEqual(expectedLote);
    });

    test('should not exceed the toleTotal limit', () => {
        const SecuenciaAleatoria = [1, 2, 3, 4, 5, 6];
        const probabilidadDefecto = 0.5;
        const toleTotal = 2;
        // unirValores(1, 2) / 100 = 0.12, unirValores(3, 4) / 100 = 0.34
        const expectedLote = [1, 1]; // Based on the threshold of 0.5 and toleTotal limit

        const result = generarLote(SecuenciaAleatoria, probabilidadDefecto, toleTotal);
        expect(result).toEqual(expectedLote);
    });
});
