/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/

const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const nota4 = document.getElementById("nota4");
const btnSituacao = document.getElementById("btnSituacao");
const caixaResultado = document.querySelector("#caixaResultado");

function calcularMedia() {
  const valor1 = parseFloat(nota1.value);
  const valor2 = parseFloat(nota2.value);
  const valor3 = parseFloat(nota3.value);
  const valor4 = parseFloat(nota4.value);

  let mensagem = "";

  //Validação de notas nulas:
  if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
    mensagem = "Por favor, digite as notas corretamente para ter acesso a sua média.";
    //Validação de números negativos e superiores a 10:
  } else if ((valor1 < 0 || valor1 > 10) || (valor2 < 0 || valor2 > 10) || (valor3 < 0 || valor3 > 10) || (valor4 < 0 || valor4 > 10)) {
    mensagem = "Por favor, digite notas válidas entre 0 e 10, excluindo números negativos ou maiores que 10.";
  } else {
    const media = parseFloat(((valor1 + valor2 + valor3 + valor4) / 4).toFixed(2));

    if (media === 0) {
      mensagem = "Infelizmente você obteve média 0 😞";
    } else if (media >= 0.1 && media <= 3) {
      mensagem = `Caramba, deu ruim, você obteve média ${media}! Estude mais e tente novamente!`;
    } else if (media >= 3.1 && media <= 5.9) {
      mensagem = `Você obteve média ${media}! Falta pouco para a média.`;
    } else if (media >= 6 && media <= 7.0) {
      mensagem = `Você está na média com ${media}`;
    } else if (media >= 7.1 && media <= 9.9) {
      mensagem = `Notão! Sua média é ${media}!`;
    } else if (media === 10.0) {
      mensagem =
        "Hoje é seu aniversário? Porque você está de parabéns! 10 na média!";
    } else {
      mensagem = "Algo deu errado, por favor digite as suas notas novamente."
    }
  }
  let situacaoAluna = document.createElement("p");
  caixaResultado.innerHTML = "";
  caixaResultado.appendChild(situacaoAluna);
  situacaoAluna.innerText = mensagem;

  limparCampos();
}

function limparCampos() {
  nota1.value = "";
  nota2.value = "";
  nota3.value = "";
  nota4.value = "";
}

