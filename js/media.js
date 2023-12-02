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

/* mudanças: 

1. preciso fazer com que o input só receba notas positivas
2. preciso fazer com que após o primeiro cálculo de média o input seja excluído
3. preciso fazer algo para que o botão fique desativado quando os inputs estiverem vazios

*/

const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const nota4 = document.getElementById("nota4");

const caixaResultado = document.querySelector("#caixaResultado");

function calcularMedia() {
  const valor1 = parseFloat(nota1.value);
  const valor2 = parseFloat(nota2.value);
  const valor3 = parseFloat(nota3.value);
  const valor4 = parseFloat(nota4.value);

  const media = (valor1 + valor2 + valor3 + valor4) / 4;


  let mensagem = "";

  if (media === 0) {
    mensagem = "Infelizmente você zerou a prova 😞";
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
  }

  let situacaoAluna = document.createElement("p");
  caixaResultado.appendChild(situacaoAluna);
  situacaoAluna.innerText = mensagem;



}
