/* 
1. Crie variáveis que capturem os valores que a usuária inserir e manipule-os nas funções 
2. Exibir o resultado na tela
*/

const button = document.querySelector(".buttonCalc");

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

  document.querySelectorAll(".resultado")[0].innerHTML =
    "Resultado: " + resultado;
}

function subtrair() {
  const valor1 = parseFloat(num1sub.value);
  const valor2 = parseFloat(num2sub.value);

  let total = valor1 - valor2;

  document.querySelectorAll(".resultado")[1].innerHTML =
    "Resultado: " + resultado;
}

/* Consertar esse multiplicar aqui jesus */
function multiplicar() {
  const valor1 = parseFloat(num1mult.value);
  const valor2 = parseFloat(num2mult.value);

  let total = valor1 * valor2;

  //caixaResultado
  const paragrafo = document.querySelectorAll(".resultado")[2]

  const resultado = document.createElement('strong');
  resultado.innerText = "";
  paragrafo.appendChild(resultado);
  resultado.innerText = total;


}

function dividir() {
  const valor1 = parseFloat(num1div.value);
  const valor2 = parseFloat(num2div.value);

  if (valor2 === 0) {
    document.querySelectorAll(".resultado")[3].innerHTML =
      "Resultado: " + "A divisão por zero é inválida";
    return;
  }

  let total = valor1 / valor2;

  document.querySelectorAll(".resultado")[3].innerHTML =
    "Resultado: " + resultado;
}

