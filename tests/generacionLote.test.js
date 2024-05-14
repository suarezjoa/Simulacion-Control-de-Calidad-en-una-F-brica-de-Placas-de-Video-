const generarLote = require('../generacionLote');

describe('generarLote', () => {
  // Prueba para verificar si devuelve un arreglo
  test('Devuelve un arreglo', () => {
    const resultado = generarLote([1, 2, 3, 4], 0.5);
    expect(Array.isArray(resultado)).toBe(true);
  });

  // Prueba para verificar si devuelve un lote correcto con una secuencia aleatoria dada
  test('Devuelve un lote correcto con una secuencia aleatoria dada', () => {
    const resultado = generarLote([10, 20, 30, 40], 0.3);
    // Se espera que el resultado sea un arreglo con la misma longitud que la secuencia aleatoria
    expect(resultado.length).toBe(2);
    // Se espera que el resultado contenga solo valores 0 o 1
    resultado.forEach(valor => {
      expect(valor).toBe(0).toBe(1);
    });
  });

  // Agrega más pruebas según sea necesario para cubrir otros casos de uso y escenarios.
});