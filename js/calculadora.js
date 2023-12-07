/* 
1. Crie variáveis que capturem os valores que a usuária inserir e manipule-os nas funções 
2. Exibir o resultado na tela
*/

const num1soma = document.querySelector("#numero1Soma");
const num2soma = document.querySelector("#numero2Soma");

const num1sub = document.querySelector("#numero1Sub");
const num2sub = document.querySelector("#numero2Sub");

const num1mult = document.querySelector("#numero1Mult");
const num2mult = document.querySelector("#numero2Mult");

const num1div = document.querySelector("#numero1Div");
const num2div = document.querySelector("#numero2Div");


function somar() {
  const valor1 = parseFloat(num1soma.value);
  const valor2 = parseFloat(num2soma.value);

  let total = valor1 + valor2;

  const paragrafo = document.querySelectorAll(".resultado")[0]

  if (isNaN(valor1) || isNaN(valor2)) {
    total = 0;
  }

  atualizarResultado(paragrafo, total);
}

function subtrair() {
  const valor1 = parseFloat(num1sub.value);
  const valor2 = parseFloat(num2sub.value);

  let total = valor1 - valor2;

  const paragrafo = document.querySelectorAll(".resultado")[1]

  if (isNaN(valor1) || isNaN(valor2)) {
    total = 0;
  }

  atualizarResultado(paragrafo, total);
}

function multiplicar() {
  const valor1 = parseFloat(num1mult.value);
  const valor2 = parseFloat(num2mult.value);

  let total = valor1 * valor2;

  const paragrafo = document.querySelectorAll(".resultado")[2]

  atualizarResultado(paragrafo, total);
}

function dividir() {
  const valor1 = parseFloat(num1div.value);
  const valor2 = parseFloat(num2div.value);

  let total = (valor1 / valor2).toFixed(2);

  const paragrafo = document.querySelectorAll(".resultado")[3]

  if (valor2 === 0) {
    total = "A divisão por zero é inválida";
  }
  if (isNaN(valor1) || isNaN(valor2)) {
    total = 0;
  }

  atualizarResultado(paragrafo, total);
}

//Função utilizada para atualizar o resultado da operação da calculadora:
function atualizarResultado(paragrafo, total) {
  const resultado = paragrafo.querySelector('strong') || document.createElement('strong');
  resultado.innerText = total;
  paragrafo.appendChild(resultado);
}