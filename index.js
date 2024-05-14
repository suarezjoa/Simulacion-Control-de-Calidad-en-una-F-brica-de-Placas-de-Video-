const minCuadMedios = require('./generadorSucesion');
const InicioFinMuestra = require("./SeleccionMuestras");
const generarLote = require("./generacionLote")
const determinarEstadoLote = require("./inspeccion")

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
    rl.question('Cantidad de Placa del lote', (entrada) => {
      // Convertir la entrada en un número entero usando parseInt()
      let numeroEntero = parseInt(entrada);
  



    rl.question("capturar probabilidad de fallo de una placa:", (otraEntrada)=>{
      let Probabilidad = parseFloat(otraEntrada);
      const sucecionAleatoria = minCuadMedios(numeroEntero, semillaHora);
      let loteGenerado = generarLote(sucecionAleatoria,Probabilidad)
      console.log("lote", loteGenerado)

      let muestraSelecion = InicioFinMuestra(loteGenerado,minCuadMedios(2,semillaHora),25)
      console.log("muestra", muestraSelecion);

      console.log("muestraProbabilidad", determinarEstadoLote(loteGenerado,muestraSelecion,1));
    });
    });
  }

capturarNumeroEntero();

