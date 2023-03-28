//contar de um numero até 10
/*

1 - CONDIÇÃO
2 - LOGICA DO NEGOCIO
3 - RECURSIVIDADE
*/
function contarAteDez(numero) {
  console.log(numero);
  if (numero >= 10) {
    // condicao
    return numero;
  }
  numero++;
  return contarAteDez(numero); //chamada da funcao recursiva
}

console.log("contarAteDez", contarAteDez(3));

function calcularPotencia(numeroBase, expoente) {
  if (expoente == 1) {
    return numeroBase;
  } else {
    return numeroBase * calcularPotencia(numeroBase, expoente - 1);
  }
}
console.log("calcularPotencia", calcularPotencia(2, 4));

function calcularPotenciaFuncaoReduzida(numero, exp) {
  return exp == 1
    ? numero
    : numero * calcularPotenciaFuncaoReduzida(numero, exp - 1);
}

console.log("calcularPotenciaReduzida", calcularPotenciaFuncaoReduzida(2, 4));

/*
function calcularPotenciaFor(numeroBase, expoente){
    let resultado = 1;
    for(let contador = 0; contador < expoente; contador++){
        resultado = resultado * numeroBase
    }
    return resultado;
}
*/

/**
 * Calcular a soma dos numeros do numero informado até o numero 1
 * USANDO FUNCAO RECURSIVA
 * somarDe(100) = 100+99+98+97...+2+1
 */

function somarDe(numero) {
  if (numero <= 1) {
    return numero;
  } else {
    return numero + somarDe(numero - 1);
  }
}
console.log("somarDe", somarDe(100));

let texto = "";
let resultadoSoma = 0;
function mostrarTextoSomarDe(numero) {
    texto += `${numero}+`;
  resultadoSoma += numero;
  if (numero <= 1) {
    texto = texto.slice(0, -1) + "=" + resultadoSoma;
    return numero;
  } else {
    let calculoFuncaoRecursiva = numero + mostrarTextoSomarDe(numero - 1);
    if (resultadoSoma === calculoFuncaoRecursiva) {
      let resultadoTextoNumero = texto;
      texto = "";
      resultadoSoma = 0;
      return resultadoTextoNumero;
    } else {
      return calculoFuncaoRecursiva;
    }
  }
}
console.log("mostrarTextoSomarDe", mostrarTextoSomarDe(100));
