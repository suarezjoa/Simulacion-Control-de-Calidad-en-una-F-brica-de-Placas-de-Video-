const minCuadMedios = require('./generadorSucesion');
const {generarLote} = require("./generacionLote")
const {determinarEstadoLote, inspeccionPlacasMuestra} = require("./inspeccion")
const { calcularFrecuencia, FrecuenciaEsperada, ValorObsrvado, validacionAletioridadSucecion } = require('./validacionEstadistica');

let now = new Date();
let hour = now.getHours().toString().padStart(2, "0");
let minute = now.getMinutes().toString().padStart(2, "0");
let second = now.getSeconds().toString().padStart(2, "0");
let hora_actual = hour + minute + second;
let semillaHora = parseInt(hora_actual.substr(-4));


const readline = require('readline');
// Crear la interfaz readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
function capturarNumeroEntero() {
    rl.question('Cantidad de Placa del lote;', (entrada) => {
      // Convertir la entrada en un número entero usando parseInt()
      let numeroEntero = parseInt(entrada);

    rl.question("capturar probabilidad de fallo de una placa con 2 numeros despues de la coma EJ, 0.01:", (otraEntrada)=>{
      let Probabilidad = parseFloat(otraEntrada);
    rl.question("Ingresar el maximo % de placas falladas del lote:", (fallolotePRO)=>{
      let maxFallosLote = parseInt(fallolotePRO);

      let sesentaPorCiento = numeroEntero * 0.6;
      let aux = numeroEntero / 4 ;
      // Redondear hacia arriba si hay decimales
      let muestra = Math.ceil(sesentaPorCiento);

      let h = 0;
      do {
        const sucecionNOaleatoria = minCuadMedios(numeroEntero, semillaHora);
        let toleranciaDeFallosLote = maxFallosLote / 100
        if (validacionAletioridadSucecion(ValorObsrvado(FrecuenciaEsperada(numeroEntero),calcularFrecuencia(sucecionNOaleatoria))) === true) {
          let totalFalladosLote = inspeccionPlacasMuestra(generarLote(sucecionNOaleatoria,Probabilidad,numeroEntero),[0,0,0],numeroEntero)
          console.log("Placas con fallos encontradas en el lote ",totalFalladosLote);
          totalFalladosLote = totalFalladosLote/100
          if (totalFalladosLote <= toleranciaDeFallosLote ){
          console.log("lote aceptado.");
          let loteGenerado = generarLote(sucecionNOaleatoria,Probabilidad,numeroEntero)
          console.log("lote", loteGenerado)
          console.log("La simulacion de muestra aleatoria de un lote es = ",determinarEstadoLote(loteGenerado,muestra,1,minCuadMedios(3,semillaHora)));
          h++;
        } else { console.log(" Lote rechazado. Buscando nuevo lote"); 
          break;
        }
        } else {
            console.log(`Buscando Sucecion de numeros aleatorios`);
        } 
    } while (h !== 1);
    rl.close();
    });
    });
  });
  }

capturarNumeroEntero();

